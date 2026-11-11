import{test,expect} from '@playwright/test'
test("Simple Alert and alert message",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(SimpleAlert)=>
    {
        console.log("Simple Alert Message is show in console = : "+ " "+SimpleAlert.message())
        SimpleAlert.accept()
    })
    await page.getByRole('button',{name :'Simple Alert'}).click()

})

test("Confirmation  Alert and alert message",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(ConfirmationAlert)=>
    {
        console.log("ConfirmationAlert  Message is show in console = : "+ " "+ConfirmationAlert.message())
        ConfirmationAlert.dismiss()

    })
    await page.getByRole('button',{name :'Confirmation Alert'}).click()
    await expect(page.locator("p#demo")).toContainText("You pressed Cancel")

})

test("Promt Alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const name=" Playwright"
    page.on('dialog',(promptAlert)=>
    {
        console.log("PromptAlert  Message is show in console = : "+ " "+promptAlert.message())
        promptAlert.accept(name)
    })
    await page.getByRole('button',{name:'Prompt Alert'}).click()
    await expect(page.locator("p#demo")).toContainText(`Hello ${name}!`)
})
