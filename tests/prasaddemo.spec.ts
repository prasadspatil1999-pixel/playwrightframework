import{test,expect} from '@playwright/test'
let Email="prasadpatil4@gmail.com"
let contact="9082012918"
let password="Prasad@45634"
let buyproduct="iphone 13 pro"
let count="India"
test("End to end testing for web",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button',{exact:true}).click()

    const allproduct=page.locator("div.card-body")
    await allproduct .first().waitFor()
    const oneproduct=await allproduct.count()

    for(let i=0; i<oneproduct; i++)
    {
        const selectproduct=await allproduct.nth(i).locator("h5").textContent()
        if(selectproduct===buyproduct)
        {
            await allproduct.nth(i).locator("button.w-10 ").click()
            break
        }
        
    }

    await page.getByText('  Cart ',{exact:true}).click()
    await page.getByRole('button',{name:'Checkout'}).click()

    await page.locator("input.txt ").nth(0).clear()
    await page.locator("input.txt ").nth(0).fill("2293929299314542")
    await page.locator("input.txt ").nth(1).fill("9087")
    await page.locator("input.txt ").nth(2).fill("prasad sunil patil")
    await page.locator("input.txt ").nth(3).fill("Counpon@34")
    await expect(page.locator("div.user__name  input").nth(0)).toHaveValue("prasadpatil4@gmail.com")

    await page.locator("div.form-group input").pressSequentially("Ind")
    await page.waitForTimeout(2000)
    const allcountry=page.locator("section.ta-results button")
    await allcountry.first().waitFor()
    const onecountry= await allcountry.count()
    for(let i=0; i<onecountry; i++)
    {
        const buyuser=await allcountry.nth(i).first().innerText()
        if(buyuser.trim()=== count)
        {
            await allcountry.nth(i).click()
            break
        }
    }






})