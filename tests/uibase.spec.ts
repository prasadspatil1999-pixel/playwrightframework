import{test , expect} from '@playwright/test'
test("tittle if the first test",async ({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input#username').fill("student");
    await expect (page.locator('input#username')).toHaveValue("student")  
    
    await page.getByLabel("Password").fill("Password123")
    await expect (page.getByLabel("Password")).toHaveValue("Password123")

    await page.getByRole('button', {name :'Submit'}).click()
    await expect(page.locator("h1.post-title")).toBeVisible()

    await expect (page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect (page.locator("h1.post-title")).toContainText("Log")

})