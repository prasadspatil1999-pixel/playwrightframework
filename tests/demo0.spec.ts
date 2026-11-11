import{test,expect} from '@playwright/test'
test("Fill and validate the textbox" , async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // fill(value) fill the textbox with value
    await page.getByLabel("Username",{exact:true}).fill("student")
    await expect(page.getByLabel("Username",{exact:true})).toHaveValue("student")
    // pressSequentially(value)
    await page.locator("input#password").pressSequentially("Password123")
    //toHaveValue (value) validate the value of the textbox
    await expect(page.locator("input#password")).toHaveValue("Password123")

    //click()- click on the element
    await page.getByRole('button',{name:'Submit'}).click()

    // toBeVisible() validate the visibility of an element on the webpage
    await expect (page.locator("h1.post-title")).toBeVisible()

    //toContainText () validate if element contains a text  
    await expect (page.locator("h1.post-title")).toContainText("Logged")

    // toHaveText validate the locators  oa an element on the webpage
    await expect (page.locator("h1.post-title")).toHaveText("Logged In Successfully")

    await page.getByText("Log out",{exact:true}).click()


})