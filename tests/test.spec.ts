import{test , expect} from '@playwright/test'
test("gettext",async ({page})=>
{
    await page.goto("https://www.facebook.com/")
    await  page.getByLabel("Email address or phone number").fill("prasadpatil@gmail.com")
    await page.getByLabel("Password").fill("prasad460535")
    await page.getByText("Create new account").click()
    await page.getByPlaceholder("")

})
test("gue elemnet" ,async({page})=>
{
    // launch the url  of the application page.goto 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("prasad")
    await page.getByPlaceholder("EMail").fill("prasagmail.com")
})

test("app",async({page})=>{
        // 1)  page.goto = launch the url  of the application

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // 1) fill method fill the text box with value suse to value ente rin field 
    await page.locator("input#username").fill("student")
   
    //2)  pressSequentially method is use to the value  enyer in th field 
    await page.locator("input#password").pressSequentially("Password123")

    //  toHaveValue method is use to comapre the vlue 
    await expect(page.locator("input#username")).toHaveValue("student")
    await expect(page.locator("input#password")).toHaveValue("Password123")
    await page.getByRole('button',{name :'Submit'}).click()
    await  expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.getByText("Log out")).toBeVisible()



})
