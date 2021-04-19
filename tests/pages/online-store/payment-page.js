import { Selector } from "testcafe";

export default class PaymentPage {
  constructor() {
    this.dropdownOption = Selector("#ec-country");
    this.countryOption = this.dropdownOption.find("option");
    this.fullName = Selector("#ec-full-name");
    this.address = Selector("#ec-address-line1");
    this.city = Selector("#ec-city-list");
    this.phone = Selector("#ec-phone");
    this.postalCode = Selector("#ec-postal-code");
    this.email = Selector("#ec-cart-email-input");
  }
}
