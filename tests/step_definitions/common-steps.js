import { Given, When } from "@cucumber/cucumber";
import CommonPage from "../pages/common-page";

const commonPage = new CommonPage();

When(/^(?:user |)clicks on "(.*)" button$/, async (t, [button]) => {
  await commonPage.clickButton(t, button);
});

Given(/^user navigates to "(.*)" page$/, async (t, [page]) => {
  await t.navigateTo("https://" + page);
});
