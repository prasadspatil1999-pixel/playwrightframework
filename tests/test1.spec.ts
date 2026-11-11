import{test,expect} from '@playwright/test'
let productname="ADIDAS ORIGINAL"
test("end to en testin",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("div.form-group input").first().fill("prasadpatil4@gmail.com")
    await page.locator("div.form-group input").last().fill("Prasad@45634")
    await page.getByRole('button',{name: 'Login'}).click()
    await expect(await page.locator(".fa-sign-out")).toBeVisible()

    const allproduct =page.locator("div.card-body")
    await allproduct.last().waitFor()
    const totalproduct=await allproduct.count()
    for(let i=0;i<totalproduct; i++)
    {
      const selectproduct=await allproduct.nth(i).locator("h5").textContent()
      if(selectproduct===productname)
      {
        await allproduct.locator("button").first().click()
        break
      }
    }

})