import { Then, When } from "@cucumber/cucumber";
import CommonPage from "../../pages/common-page";
import OurShopPage from "../../pages/online-store/our-shop";
import PaymentPage from "../../pages/online-store/payment-page.js";
import { ClientFunction } from "testcafe";

const ourShopPage = new OurShopPage();
const commonPage = new CommonPage();
const paymentPage = new PaymentPage();

When(/^(?:the user|)navigates to "(.*)" tab$/, async (t, [tab]) => {
  await commonPage.clickButton(t, tab);
  await t.maximizeWindow();
});

When(/^chooses "(.*)" size for product$/, async (t, [size]) => {
  await commonPage.clickCheckbox(t, size);
});

When(/^user clicks on "(.*)" product$/, async (t, [name]) => {
  await ourShopPage.selectProduct(t, name);
});

When(/^adds (invalid|valid) email address$/, async (t, [type]) => {
  switch (type) {
    case "invalid":
      await commonPage.enterInput(t, paymentPage.email, "vardas");
      break;
    case "valid":
      await commonPage.enterInput(t, paymentPage.email, "vardas@gmail.com");
      break;
  }
});

When(/^enters payment information$/, async (t, [], table) => {
  await t
    .click(paymentPage.dropdownOption)
    .click(paymentPage.countryOption.withText(table.hashes()[0]['Country']));
  
  await commonPage.enterInput(t,paymentPage.fullName,table.hashes()[0]['Full_Name']);
  await commonPage.enterInput(t,paymentPage.address,table.hashes()[0]['Address']);
  await commonPage.enterInput(t,paymentPage.city,table.hashes()[0]['City']);
  if(table.hashes()[0]['Postal_Code']!=null)
    await commonPage.enterInput(t,paymentPage.postalCode,table.hashes()[0]['Postal_Code']);
  if(table.hashes()[0]['Phone'] != null )
    await commonPage.enterInput(t,paymentPage.phone,table.hashes()[0]['Phone']);

});

Then(/^message "(.*)" appears$/, async (t, [message]) => {
  await t.expect(ourShopPage.badEmailMessage.withText(message).exists).ok();
});

Then(/^user is navigated to payment information page$/, async (t) => {
  const getURL = ClientFunction(() => window.location.href)();
  await t.expect(getURL).contains("store-page=checkout/payment");
});
