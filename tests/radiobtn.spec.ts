import{test,expect} from'@playwright/test'
test("radio button",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText("Male",{exact : true}).uncheck()
    await expect(page.getByText("Male",{exact : true})).toBeChecked()
  // await page.getByPlaceholder("Male").check()


})

test("radio button 2",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByLabel("Wednesday",{exact:true}).uncheck()
    await expect(page.getByLabel("Wednesday",{exact:true})).not.toBeChecked()
    await page .getByText("Thursday",{exact:true}).check()
    await expect(page .getByText("Thursday",{exact:true})).toBeChecked()


})
