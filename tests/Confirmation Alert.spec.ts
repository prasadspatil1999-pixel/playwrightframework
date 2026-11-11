import{test ,expect} from '@playwright/test'
test("Confirmation Alert" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog)=>
    {
            console.log(dialog.message())
            dialog.accept()
    })
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toContainText("You pressed OK!")


})
test ("cancel alert",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog)=>
    {
        console.log(dialog.message())
        dialog.dismiss()
    })
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toContainText("You pressed Cancel!")


})

test("presernt alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const text="Playwright"
    page.on('dialog',(dialog)=>
    {
        console.log(dialog.message)
        dialog.message()
        dialog.accept(text)
    })
    await page.locator("#promptBtn").click()
    await expect(page.locator("#demo")).toContainText(`Hello ${text}!`)

})