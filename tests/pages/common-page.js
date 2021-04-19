import { Selector } from "testcafe";

export default class CommonPage {
  constructor() {
    this.input = Selector("input");
    this.button = Selector("button,a");
  }

  async clickButton(t, name) {
    const button = await this.button.withText(name);
    await t.hover(button);
    await t.click(button);
  }

  async enterInput(t, selector, text) {
    await t.hover(selector);  //This testcafe method for some reason does not work
    await this.scrollAndHover(t, selector); //Second try. Only works on wide and tall screens
    await t.typeText(selector, text, { speed: 0.2 });
  }

  async clickCheckbox(t, value) {
    const checkbox = await this.input.withAttribute("value", value);
    await t.hover(checkbox);
    await t.click(checkbox);
  }

  async scrollAndHover(t, selector) {
    const result = selector.addCustomMethods({
      scroll: (el) => {
        el.scrollIntoView();
      },
    });
    await t.hover(result);
  }
}
