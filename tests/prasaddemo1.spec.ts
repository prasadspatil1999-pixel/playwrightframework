import{test,expect} from '@playwright/test'
let Email="prasadpatil4@gmail.com"
let password="Prasad@45634"
let buyproductname="iphone 13 pro"
let country="India"
 test("End to end testing",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").pressSequentially(Email)
    await page.locator("#userPassword").pressSequentially(password)
    await page.getByRole('button',{name:'Login'}).click()

    const allProduct=page.locator("div.card-body")
    await allProduct.last().waitFor()
    const oneProduct= await allProduct.count()

    for(let i=0; i<oneProduct; i++)
    {
       const buyProduct= await allProduct.nth(i).locator("h5").textContent()
       if(buyProduct===buyproductname)
       {
        await allProduct.nth(i).locator("button.w-10").click()
        break
       }
    }

    await page.getByText('  Cart ',{exact:true}).click()
    await page.getByRole('button',{name:'Checkout'}).click()

    await page.locator("input.input ").nth(0).clear()
    await page.locator("input.input ").nth(0).pressSequentially("7895231045896589")
    await page.locator("input.input ").nth(1).pressSequentially("7895")
    await page.locator("input.input ").nth(2).pressSequentially("prasad Sunil patil")
    await page.locator("input.input ").nth(3).pressSequentially("prasad460535")

    await expect(page.locator("div.user__name input").first()).toHaveValue("prasadpatil4@gmail.com")

    await page.locator("div.form-group input").pressSequentially("Ind")
    
    await page .waitForTimeout(2000)
    const allcountry=page.locator("section.ta-results button")
    await allcountry.first().waitFor()

    const oneproduct = await allcountry.count()

    for(let i=0; i<oneproduct; i++)
    {
        const usercountry=await allcountry.nth(i).first().innerText()
        if(usercountry.trim()===country)
        {
            await allcountry.nth(i).click()
            break
        }

    }




})