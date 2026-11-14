import{test,expect,Dialog} from '@playwright/test'
test("Window handle ",async({page})=>
{
    let message='i am software'
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")
    const page0=page.waitForEvent("popup")
    await page.locator("#newTabBtn").click()
    const newPage=await page0
    newPage.on("dialog",async (dialog:Dialog)=>
    {
        console.log(dialog.type())
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        await dialog.accept(message)
    })
    await newPage.locator("#promptBox").click()
    await expect(newPage.locator("#output")).toContainText(`You entered text ${message}`)
})