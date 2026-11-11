import{test,expect}from '@playwright/test'
import { addAbortListener } from 'node:events'
let Email="prasadpatil4@gmail.com"
let password="Prasad@45634"
let ProductName="ADIDAS ORIGINAL" 
let coun="India"
test("EtE testing",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.locator("input#userPassword").fill(password)
    await page.getByRole('button',{name:'Login'}).click()

    const allproduct=page.locator("div.card-body")
    await allproduct.last().waitFor()
    const oneproduct= await allproduct.count()

    for(let i=0; i<oneproduct;i++)
    {
        const selecproduct=await allproduct.nth(i).locator("h5").textContent()
        if(selecproduct === ProductName)
        {
            await allproduct.nth(i).locator("button").last().click()
        }
    }

    await page.locator("button.btn ").nth(2).click()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.locator("div.user__address input").pressSequentially("Ind")

    const allcountry=page.locator("section.ta-results  button")
    await allcountry.first().waitFor()
    const onecountry=await allcountry.count()

    for(let i=0; i<onecountry; i++)
    {
       const selectcoun= await allcountry.nth(i).first().innerText()
       if(selectcoun.trim()=== coun)
       {
        await allcountry.nth(i).click()
        break
       }
    }

})
