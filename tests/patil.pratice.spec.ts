import{expect,test} from '@playwright/test'
test("End To ENd Testing",async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    const textloginmessage=await page.locator("section#login h2").textContent()
    console.log(textloginmessage)

    await page.getByLabel('Username',{exact:true}).fill("student")
    await expect(page.getByLabel('Username',{exact:true})).toHaveValue("student")
    await page.getByLabel('Password',{exact:true}).fill("Password123")
    await expect( page.getByLabel('Password',{exact:true})).toHaveValue("Password123")
    await page.getByRole('button',{name:'Submit'}).click()


    const loginsucessfully =await page.locator("div.post-header h1").textContent()
    console.log(loginsucessfully)
    await expect(await page.locator("div.post-header h1")).toHaveText("Logged In Successfully")

    await expect(await page.locator("div.post-header h1")).toContainText("In")

    const message=await page.locator("p.has-text-align-center strong").textContent()
    console.log(message)

    await expect(page.locator("p.has-text-align-center strong")).toHaveText("Congratulations student. You successfully logged in!")
    
    await page.getByText("Log out",{exact:true}).click()

    await page.locator("input#username").fill("student")
    await page.locator("input#password").fill("Password12345")
    await page.getByRole("button",{name:'Submit'}).click()
    await   expect(page.locator("div.show")).toHaveText("Your password is invalid!")





})