import{test ,expect} from '@playwright/test'
test("gettext",async({page})=>
{
   // await page.goto("https://testautomationpractice.blogspot.com/")
   await page.goto("https://www.xe.com/currencyconverter/")
   // textcontext
   const value=await page.locator("h1.text-center").textContent()
   console.log(value)
   await expect(value).toBe("Xe Currency Converter")
  // await expect(value).toContain("Xe Currency")


})
test("gettext multi",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
   //await page.goto("https://www.xe.com/currencyconverter/")
   // textcontext
   const value=await page.locator("h2.title").allTextContents()
   console.log(value)
   //await expect(value).toBe("Xe Currency Converter")
  // await expect(value).toContain("Xe Currency")


})
