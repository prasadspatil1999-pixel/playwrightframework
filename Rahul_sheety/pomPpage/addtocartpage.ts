import { Page, Locator } from '@playwright/test'
import { bassepage } from '../basePage/basepage'
export class addToCartPage extends bassepage {
    readonly productSelect: Locator
    readonly CartIcon: Locator

    constructor(page: Page) {
        super(page)
        this.productSelect = this.page.locator("div.card-body")
        this.CartIcon = this.page.locator("button.btn-custom").nth(2)
    }
    async pronames(addtocart: string) {
        await this.productSelect.first().waitFor()
        const oneselect = await this.productSelect.count()
        for (let i = 0; i < oneselect; i++) {
            const name = await this.productSelect.nth(i).locator("h5").textContent()
            if (name === addtocart) {
                await this.productSelect.nth(i).locator("button.w-10").click()
                break
            }
        }
        await this.click(this.CartIcon)
    }
}
