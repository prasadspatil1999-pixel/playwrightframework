import { test as basetest } from '@playwright/test'
import { loginPage } from '../pomPpage/loginPage'
import { addToCartPage } from '../pomPpage/addtocartpage'
type pomFixture = {
    login: loginPage
    addtocart:addToCartPage
}
export const test=basetest.extend<pomFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page))
    },
    addtocart:async ({page},use)=> {
        await use(new addToCartPage(page))
    }
})