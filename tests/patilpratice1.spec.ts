import{test,expect} from '@playwright/test'
test("End to End Testing",async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.getByLabel("Username").pressSequentially("student")
    await expect(page.getByLabel("Username")).toHaveValue("student")

    await page.getByLabel("Password").pressSequentially("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123")

    await page.getByRole('button',{name:'Submit'}).click()

    const dismessage=await page.locator("p.has-text-align-center strong").textContent()
    console.log(dismessage)

    const message=await page.locator("div.post-header h1").textContent()
    console.log(message)

   // await page.getByRole('button',{ name :'Log out'}).click()

    await page.getByRole('link', { name: 'Log out' }).click()


})