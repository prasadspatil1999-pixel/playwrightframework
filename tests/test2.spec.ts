import{test , expect} from '@playwright/test'
let Email="prasadpatil4@gmail.com"
let password="Prasad@45634"
let ProductName="ADIDAS ORIGINAL"   
let ProductName1="ZARA COAT 3"
let ProductName2="iphone 13 pro"
let countryIn="India"
test(" End to end testing", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.locator("input#userPassword").fill(password)
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByText(" Sign Out ")).toBeVisible()

    const allProduct=page.locator("div.card-body")
    await allProduct.last().waitFor()
    const oneProduct=await allProduct.count()
    
    for(let i=0; i<oneProduct; i++)
    {
        const textProduct=await allProduct.nth(i).locator("h5").textContent()
        if(textProduct===ProductName)
        {
            await allProduct.nth(i).locator("button").last().click()
            await allProduct.nth(i).locator("button").first().click()

            break
        }
    }
    await page.getByRole('button',{name:'HOME'}).click()

        const product1= page.locator("div.card-body")
       // await product1.last().waitFor()
        const product2=await product1.count()

        for(let i=0; i<product2; i++)
        {
            const selectproduct=await product1.nth(i).locator("h5").textContent()
            if(selectproduct===ProductName1)
            {
                await product1.nth(i).locator("button").last().click()
                break
                
            }

        }
      
        


        const ADIDAS0= page.locator("div.card-body")
        await ADIDAS0.last().waitFor()
        const ADIDAS1= await ADIDAS0.count()

        for( let i=0; i<ADIDAS1; i++)
        {
            const ADIDAS2=await ADIDAS0.nth(i).locator("h5").textContent()
            if(ADIDAS2===ProductName2)
            {
                await ADIDAS0.nth(i).locator("button").last().click()
            }
        }

        await expect(page.locator("div#toast-container")).toHaveText(" Product Added To Cart ")
        await page.waitForTimeout(1000)
        await page.locator(".btn-custom").nth(2).click()

        await page.getByRole('button',{name:'Checkout'}).click()
        await page.locator("input.txt ").nth(0).clear()
        await page.locator("input.txt ").nth(0).fill("2454 1399 9292 3922")
        await page.locator("input.txt ").nth(1).fill('8965')
        await page.locator("input.txt ").nth(2).fill("Prasad sunil patil")

        await expect(page.locator("div.user__name input").first()).toHaveValue("prasadpatil4@gmail.com")
        await page.locator("div.form-group input").pressSequentially("Ind")
        await page.waitForTimeout(3000)

        const allcountry=page.locator("section.ta-results button")
        await allcountry.first().waitFor()
       const country= await allcountry.count()

       for(let i=0; i<country; i++)
       {
        const selectcountry=await allcountry.nth(i).first().innerText()
        if(selectcountry.trim()===countryIn)
        {
            await allcountry.nth(i).click()
            break

        }

       }


})