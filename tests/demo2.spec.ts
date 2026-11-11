import{test,expect} from '@playwright/test'
test("  ",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // select the radio button and checkbox
    // to check the check box using click ()
    await page.locator("input#male").click()
    // to verify radio check box selecte or not buy using toBeChecked
    await expect(page.locator("input#male")).toBeChecked()
    await page.waitForTimeout(1000)
    // to check the check box using check ()
    await page.getByLabel("Thursday",{exact:true}).check()
    await expect(page.getByLabel("Thursday",{exact:true})).toBeChecked()
    // to check the check box using uncheck ()
    await page.getByLabel("Thursday",{exact:true}).uncheck()
    // to verify radio check box unselecte or not buy using toBeChecked
    await expect(page.getByLabel("Thursday",{exact:true})).not.toBeChecked()


})
