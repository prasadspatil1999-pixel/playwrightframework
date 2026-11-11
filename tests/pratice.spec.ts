import{test,expect} from '@playwright/test'
let productname="ZARA COAT 3"
test("demo0",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/order-details/6959ec3cc941646b7a7be767")
    await page.locator("#userEmail").pressSequentially("prasadpatil4@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Prasad@45634")
    await page.getByRole('button',{name:'Login'}).click()

    const allitems=page.locator("div.card-body")
    await allitems.last().waitFor()

    const oneitem=await allitems.count()
    for(let i=0; i<oneitem; i++)
    {
        const selectproduct=await allitems.nth(i).locator("h5").textContent()
        if(selectproduct===productname)
        {
            await allitems.nth(i).locator("button.w-10").click()
            break
        }
    }
    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole('button',{name:'Checkout'}).click()
    await expect(page.locator("[fdprocessedid]").nth(11)).toContainText("prasadpatil4@gmail.com")
})