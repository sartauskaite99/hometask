import { Selector } from "testcafe";

export default class OurShopPage {
  constructor() {
    this.product = Selector("a");
    this.productMessage = Selector("span");
    this.badEmailMessage = Selector("div");
  }

  async selectProduct(t, name) {
    const product = await this.product.withAttribute("title", name);
    await t.hover(product);
    await t.click(product);
  }
}
