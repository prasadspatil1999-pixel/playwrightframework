import{test ,expect} from '@playwright/test'
test("alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#alertBtn").click()
    page.on('dialog',(dialog )=> 
        {
            console.log(dialog.message())
            expect(dialog.message()).toContain("alert box")
            dialog.accept()
        })
})
test("alert2",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#alertBtn").click()
    page.on('dialog',(dialog )=> 
        {
            console.log(dialog.message())
            expect(dialog.message()).toContain("alert box")
            dialog.accept()
        })
})
test("alert3",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#alertBtn").click()
    page.on('dialog',(dialog )=> 
        {
            console.log(dialog.message())
            expect(dialog.message()).toContain("alert box")
            dialog.accept()
        })
})
