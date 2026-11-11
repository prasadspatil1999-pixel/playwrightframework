import{test , expect} from "@playwright/test"
test("double click ",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page.locator("#field2")).not.toHaveValue("Hello World!")

    await page.getByText("Copy Text").dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
        await page.getByText("Double-Click Me To See Alert",{exact : true}).dblclick()

    await page.getByText("right click me",{exact : true}).click({button:'right'})
    await page.getByText("Paste",{exact : true}).click()
    await page.waitForTimeout(3000)
    
})