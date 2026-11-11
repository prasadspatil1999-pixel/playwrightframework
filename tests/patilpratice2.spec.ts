import{test,expect} from '@playwright/test'
test(" End to end Tesing",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

   // await page.locator("#userEmail").pressSequentially("prasadpatil4@gmail.com")
   await page.waitForTimeout(1000)
    await page.getByLabel('Email',{exact:true}).fill("prasadpatil4@gmail.com")
    await expect(page.locator('#userEmail')).toHaveValue("prasadpatil4@gmail.com")
    await page.locator("#userPassword").fill("Prasad@45634")
    await expect(page.locator("#userPassword")).toHaveValue("Prasad@45634")
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(1000)
    const value= await page.locator("div.ng-tns-c4-5").last().textContent()
    console.log(value)

    
    
})