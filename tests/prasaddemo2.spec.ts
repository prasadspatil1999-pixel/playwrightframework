import{test,expect} from '@playwright/test'
let Email="prasadpatil4@gmail.com"
let password="Prasad@45634"
let buyproductname="iphone 13 pro"
let product1="ZARA COAT 3"
let country="India"
test(" end to end testing",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill(Email)
    await page.locator("#userPassword").fill(password)
    await page.getByRole('button',{exact:true}).click()
    await page.waitForTimeout(2000)
    const allproductname=await page.locator("div.card-body h5").allTextContents()
    console.log(allproductname)

    const productsname=page.locator("div.card-body")
    await productsname.last().waitFor()
    const oneproduct=await productsname.count()

    for(let i=0; i<oneproduct; i++)
    {
        const selectProduct=await productsname.nth(i).locator("h5").textContent()
        if(selectProduct === buyproductname)
        {
            await productsname.nth(i).locator("button.w-10").click()
            break
        }
    }
    await page.getByText('  Cart ',{exact:true}).click()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.waitForTimeout(2000)
    
    await page.locator(".input").nth(0).clear()
    await page.locator(".input").nth(0).fill("983651219460")

    await page.locator("input.input").nth(1).fill("460535")

    await page.locator("input.input").nth(2).fill("prasad sunil patil")

    await page.locator("input.input").nth(3).fill("Pr@$@d")

    await expect(page.locator("div.user__name input").first()).toHaveValue(Email)

    await page.locator("div.form-group input").pressSequentially("Ind")
    await page.waitForTimeout(2000)

   const allcountry= page.locator("section.ta-results  button")
   await allcountry.first().waitFor()

   const onecount= await allcountry.count()
   for(let i=0; i<onecount; i++)
   {
   const countrys= await allcountry.nth(i).first().innerText()
   if(countrys.trim()===country)
   {
    allcountry.nth(i).click()
    break
   }
   }

})