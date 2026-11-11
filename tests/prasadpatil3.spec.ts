import{test,expect} from '@playwright/test'
import { on } from 'node:cluster'

let Email="prasadpatil4@gmail.com"
let password="Prasad@45634"
let buyproductname="iphone 13 pro"
let coun="India"
test("End to End Testing",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.locator("input#userPassword").fill(password)
    await page.getByRole('button',{name:'Login'}).click()

    const allProduct= page.locator("div.card-body")
    await allProduct.last().waitFor()
    const oneproduct=await allProduct.count()

    for(let i=0; i<oneproduct; i++)
    {
        const selectProduct=await allProduct.nth(i).locator("h5").textContent()
        if(selectProduct===buyproductname)
        {
            await allProduct.nth(i).locator("button.w-10").click()
            break
        }
    }

    await page.getByText('  Cart ',{exact:true}).click()

    await page.getByText('Checkout',{exact:true}).click()

    await page.locator("//input[@value='4542 9931 9292 2293']").clear()

     await page.locator("//input[@value='4542 9931 9292 2293']").fill("9271432477")

     await page.locator("input.input").nth(1).fill('460535')

    await page.locator("input.input").nth(2).fill('Praasad sunil Patil')

    await page.locator("input.input").nth(3).fill('PR@$@d')

    await expect(page.locator("div.user__name input").first()).toHaveValue(Email)

    await page.locator("div.form-group input").pressSequentially("Ind")

    const allcountry= page.locator("section.ta-results button")
    await  allcountry.first().waitFor()
    const  onecountry = await allcountry.count()

    for(let i=0; i<onecountry; i++)
    {
        const buyerproduct=await allcountry.nth(i).first().innerText()
        if(buyerproduct.trim()===coun)
        {
            await allcountry.nth(i).click()
            break
        }
    }

}) 