import{test,expect} from '@playwright/test'
test("Fill and Vlaidate the textBox",async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel('Username ',{exact:true}).fill("student")
    await expect(page.getByLabel('Username ',{exact:true})).toHaveValue("student")

    await page.getByLabel('Password' ,{exact:true}).pressSequentially("Password123")
    await expect(page.getByLabel('Password',{exact:true})).toHaveValue("Password123")

    await  page.getByRole('button',{name:'Submit'}).click()

    const SuccessfulMessage = await page.locator("div.post-header h1").textContent()
    console.log(SuccessfulMessage)
    await expect(page.locator("div.post-header h1")).toBeVisible()
    
    await expect(await page.locator("div.post-header h1")).toContainText("Logged")

    await expect(await page.locator("div.post-header h1")).toHaveText("Logged In Successfully")

    const message= await page.getByText('Congratulations student. You successfully logged in!', { exact: true }).textContent()
    console.log(message)

    await page.getByRole('link', { name: 'Log out' }).click()

    const loginMessage=await page.locator("section#login h2").textContent()
    console.log(loginMessage)


    await page.getByLabel('Username ',{exact:true}).fill("student")
    await page.getByLabel('Password' ,{exact:true}).pressSequentially("Password460")
    await  page.getByRole('button',{name:'Submit'}).click()

    const errormessage= await page.locator("div#error").textContent()
    console.log(errormessage)
    await expect(await page.locator("div.show")).toContainText("Your password is invalid!")
    await expect(await page.locator("div.show")).toHaveText("Your password is invalid!")

    await 

})