import{test, expect} from '@playwright/test'
test("Handle frame",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("input#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).not.toBeVisible()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()

    const framePage=await page.frameLocator("#courses-iframe")

    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator("div.inner-box h1")).toContainText("Subscription")

    await page.getByRole('button',{name:'Home'}).click()
    await page.waitForTimeout(3000)

})

test("Nested Frame" , async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    //click on thee ifram option
    await page.getByText("Iframe with in an Iframe").click()
    //enter the our frame with referenc varibalem  
    const outerframe= await page.frameLocator("#Multiple iframe")

    const framepage=outerframe.frameLocator(".iframe-container iframe")

    await framepage.locator("div.row input").last().fill('prasad')
    await expect(framepage.locator("div.row input").last()).toHaveValue("prasad")   
    await page.getByText("Home").click()
    await page.getByPlaceholder("Email id for Sign Up").fill("prasad@gmail.com")
    await page.locator("#enterimg").click()
})