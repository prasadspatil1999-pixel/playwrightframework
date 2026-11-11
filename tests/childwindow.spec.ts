import{test , expect} from '@playwright/test'
test("child window" , async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 = page.waitForEvent('popup')
    await page.getByText('click',{exact :true}).first().click()
    const newpage= await page1

   // await page.waitForTimeout(10000)
    await newpage.getByText("Downloads").click()
    await expect(newpage.locator('#bindings')).toContainText("WebDriver Language")
    await page.bringToFront()
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible()

})

test("child window 1",async ({page})=>
{
        await page.goto("https://demo.automationtesting.in/Windows.html")
        page.on('dialog',(dialog)=>
        {

            console.log(dialog.message())
            dialog.dismiss()
        })

})