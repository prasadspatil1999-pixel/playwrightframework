import{test, expect} from '@playwright/test'
test("radio button",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //click method is click on radio button normal click on
    // check()
      //  await expect( page.locator("input#male")).toBeChecked()

    await page.locator("input#male").click()
    await expect( page.locator("input#male")).toBeChecked()

 //   await page .getByText("input#male").check()

})