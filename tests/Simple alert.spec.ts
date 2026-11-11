import { test,expect } from "@playwright/test"
test("Alert message",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(SimpleAlert)=>
    {
        console.log("Alert Message Show in console - :"+" "+SimpleAlert.message())
        SimpleAlert.accept

    })
    await page.getByRole('button',{name:'Simple Alert'}).click()
})

test("Confirmation Alert" , async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(ConfirmationAlert)=>
    {
        console.log("Confirmation Alert Messageshow = :"+ " " +ConfirmationAlert.message())
        ConfirmationAlert.accept()
    })
    await page.getByRole('button',{name:'Confirmation Alert'}).click()
    const verifymessage = await page.locator("p#demo").textContent()
    console.log(verifymessage)
    await expect(page.locator("p#demo")).toHaveText('You pressed OK!')
})
test("Confirmation Alert dissmiss", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(ConfirmationAlert)=>
    {
        console.log("ConfirmationAlert message show = "+"  "+ConfirmationAlert.message())
        ConfirmationAlert.dismiss()
    })
    await page.getByRole('button',{name:'Confirmation Alert'}).click()
    const message=await page.locator("p#demo").textContent()
    console.log(message)
    await expect(page.locator("p#demo")).toHaveText("You pressed Cancel!")
})

test("promp Alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const test0="Playwright"

    page.on('dialog',(PrompAlert)=>
    {
        console.log(PrompAlert.type())
        console.log("PromptAlert messageshow in console = "+ "  " +PrompAlert.message())
        PrompAlert.accept(test0)
        
    })

    await page.getByRole('button',{name:'Prompt Alert'}).click()
    const message = await page.locator("p#demo").textContent()
    console.log(message)
    await expect(page.locator("p#demo")).toContainText(`Hello ${test0}!`)
    
})