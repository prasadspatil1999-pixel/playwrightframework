import{test,expect} from '@playwright/test'
test("end to end testing",async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const textlogin= await page.locator("section#login h2").textContent()
    console.log(textlogin)

    await page.getByLabel('Username',{exact:true}).fill("student")
    await expect(page.getByLabel('Username',{exact:true})).toHaveValue("student")

    await page.getByLabel("Password",{exact:true}).pressSequentially("Password123")
    await expect(page.getByLabel("Password",{exact:true})).toHaveValue("Password123")

    await page.getByRole("button",{name:'Submit'}).click()

    const message0 = await page.locator("div.post-header h1").textContent()
    console.log(message0)

    const message1=await page.locator("div.post-content p strong").textContent()
    console.log(message1)

    await page.getByRole('link',{name:'Log out'}).click()

    const message3=await page.locator("section#login h2").textContent()
    console.log(message3)

    await page.locator("input#username").fill("student")
    await page.locator("input#password").fill("Password12")
    await page.getByRole("button",{name:'Submit'}).click()

    const errorMEssage= await page.locator("div.show").textContent()
    console.log(errorMEssage)

    await expect(await page.locator("div.show")).toHaveText("Your password is invalid!")





})