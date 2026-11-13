import { test as basetest } from '@playwright/test'
import { loginPage } from '../pomPpage/loginPage'
import { addToCartPage } from '../pomPpage/addtocartpage'
import { mycart } from '../pomPpage/Mycart'
import { payement } from '../pomPpage/payementpage'
type pomFixture = {
    login: loginPage
    addtocart:addToCartPage
    mycart:mycart
    payment:payement
}

export const test=basetest.extend<pomFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page))
    },
    addtocart:async ({page},use)=> {
        await use(new addToCartPage(page))
    },
    mycart:async({page},use)=>
    {
        await use(new mycart(page))
    },
    payment:async({page},use)=>
    {
        await use(new payement(page))
    }
})