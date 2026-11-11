import { Page, Locator } from '@playwright/test'
import { bassepage } from '../basePage/basepage';
export class loginPage extends bassepage {
    readonly userName: Locator
    readonly password: Locator
    readonly loginbtn: Locator
    constructor(page: Page) {
        super(page)
        this.userName = this.page.locator("#userEmail")
        this.password = this.page.locator("#userPassword")
        this.loginbtn = this.page.locator("#login")
    }
    async launchurl(url: string) {
        await this.navigate(url)
    }
    async logininfo(username: string, password: string) {
        await this.fill(this.userName, username)
        await this.password.fill(password)
        await this.click(this.loginbtn)
    }
}