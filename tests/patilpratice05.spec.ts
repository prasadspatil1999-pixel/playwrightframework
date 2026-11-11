import{test,expect} from '@playwright/test'
test("End To End Testing", async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const message0=await page.locator("section #login h2").textContent()
    console.log(message0)

    await page.getByLabel('Username',{exact:true}).fill("student")
    await expect(page.getByLabel('Username',{exact:true})).toHaveValue('student')

    await page.getByLabel('Password',{exact:true}).pressSequentially("Password123")
    await expect(page.getByLabel('Password',{exact:true})).toHaveValue("Password123")
    await page.getByRole('button',{name:'Submit'}).click()

    const message1=await page.locator("div.post-header h1").textContent()
    console.log(message1)

    await expect(await page.locator("div.post-header h1")).toHaveText("Logged In Successfully")

    await expect(await page.locator("div.post-header h1")).toContainText("Logged In Successfully")

    const message2= await page.locator("p.has-text-align-center strong").textContent()
    console.log(message2)

    await expect(page.locator("p.has-text-align-center strong")).toHaveText("Congratulations student. You successfully logged in!")
    await page.getByRole('link',{name:'Log out'}).click()

    await page.getByLabel('Username',{exact:true}).fill("student")
    await page.getByLabel('Password',{exact:true}).pressSequentially("Password1234")
    await page.getByRole('button',{name:'Submit'}).click()
   
    const message4=await page.locator("div.show").textContent()
    console.log(message4)

    await expect(page.locator("div.show")).toContainText("password")


})
