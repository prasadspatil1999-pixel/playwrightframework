import{test,expect} from '@playwright/test'
import { addAbortListener } from 'node:events'
let Email="prasadpatil4@gmail.com"
let contact="9082012918"
let password="Prasad@45634"
let conpassword="Prasad@45634"
let producnamebuy="ADIDAS ORIGINAL"
let ownercountry="India"
test(" end to end testing", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole("button",{name:'Login'}).click()
    const allproduct= page.locator("div.card-body")
    await allproduct.last().waitFor()

    const oneproduct= await allproduct.count()

    for(let i=0; i<oneproduct; i++)
    {
        const selectpro=await allproduct.nth(i).locator("h5").textContent()
        if(selectpro===producnamebuy )
        {
            await allproduct.nth(i).locator("button").last().click()
            break
        }
    }
    await page.locator("button.btn ").nth(2).click()

    await page.getByRole('button',{name:'Checkout'}).click()
    await  page.locator("input.input").nth(0).clear()
    await page.locator("input.input").nth(0).fill('963247854562')
    await page.locator("input.input").nth(1).fill('1010')
    await page.locator("input.input").nth(2).fill('prasad sunil patil')
    await page.locator("input.input").nth(3).fill('prasad@460535')
    await expect(await page.locator("div.user__name  input").nth(0)).toHaveValue("prasadpatil4@gmail.com")

    await page.locator("div.form-group input").pressSequentially("Ind")

    const allcity=page.locator("section.ta-results button")
    await allcity.first().waitFor()
    const onecity= await allcity.count()

    for(let i=0; i<onecity; i++)
    {
       const coun= await allcity.nth(i).first().innerText()
       if(coun.trim()===ownercountry)
       {
        await allcity.nth(i).click()
        break
       }
    }




})