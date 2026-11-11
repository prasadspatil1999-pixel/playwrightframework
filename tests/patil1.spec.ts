import{test ,expect} from '@playwright/test'
let userName="prasad@460535"
let userEmail="prasadspatil1999@gmail.com"
let userPassword="Prasad@460535+"
let Confirmpassword="Prasad@460535+"
test(" End to End Teting", async({page})=>
{
    await page.goto("https://practice.expandtesting.com/bookstore/user/signin")
    await page.getByText('Sign Up!',{exact:true}).click()
    await page.locator("#username").fill(userName)
    await page.locator('input.form-control').nth(1).fill(userEmail)
    await page.locator("input#password").fill(userPassword)
    await page.getByLabel('Confirm your password',{exact:true}).fill(Confirmpassword)
    await page.getByText('Sign Up',{exact:true}).click()

    await page.locator("input#email").fill(userEmail)
    await page.locator("input#password").fill(userPassword)
    await page.getByText('Sign In',{exact:true}).click()




   // await page.waitForTimeout(1000)
 // await  page.getByRole('link', { name: 'Sign In' }).click()
       //await page.getByText('Sign In',{exact:true}).click()
//await page.locator('a:has-text("Sign In")').click()
   // await page.locator('a.nav-link').nth(7).click()
})

test("Open cart", async({page})=>
{
    await page.goto("https://demo.opencart.com/en-gb?route=account/register")

})