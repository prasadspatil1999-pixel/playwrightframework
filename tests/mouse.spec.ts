import{test ,expect} from '@playwright/test'
test("double click", async({page})=>
{
    //dounle click 
    await page.goto("https://testautomationpractice.blogspot.com/")
        await expect (page.locator("input#field2")).not.toHaveValue("Hello World!")
    const vale="Hello World!"
    await page.getByText("Copy Text",{exact:true}).dblclick()
    await expect (page.locator("input#field2")).toHaveValue(vale)

})

test("right  click", async({page})=>
{
        // righr click
        await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
        await page.getByText("right click me",{exact:true}).click({button:'right'})
        await page.getByText("Delete",{exact:true}).click()
        await page.waitForTimeout(3000)
})
test("handling mouse over", async({page})=>
 {
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Add-ons",{exact:true}).hover({force:true})
    await expect(page.getByTestId("test-id-Indian Armed Forces Personnel")).toBeVisible()

})

test("handling drag and drop", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const sourceElement = await page.locator("div.ui-widget-content").first()
    const targetElement = await page.locator("div.ui-widget-header").first()
    await sourceElement.dragTo(targetElement)
    await expect(targetElement).toHaveText("Dropped!")



})

test("Scrolling down", async({page})=>
{

})




