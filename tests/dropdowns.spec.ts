import { test, expect } from "@playwright/test"

test("dropdown",async({browser})=>
{
      const context = await browser.newContext();
      const page = await context.newPage();



    await page.goto("https://practice.expandtesting.com/dropdown")
  // await page.locator("select#country").selectOption({value:"IN"})
   await page.locator("select#country").selectOption({label: "India"})
   // await page.locator("select#country").seectOption({index:103})

     const page1= await context.newPage();

   await page1.goto("https://demoqa.com/select-menu")
    await page1.waitForTimeout(2000)
   await page1.locator("#cars").selectOption((['Volvo','Saab']))
   await page1.waitForTimeout(2000)
   await page1.locator("#cars").selectOption({label:"Opel"})
    await page1.waitForTimeout(2000)
   await page1.locator("#cars").selectOption({index: 3})
   await page1.waitForTimeout(2000)      
})
test("without select tag",async({page})=>
{
   await page.goto("https://demoqa.com/select-menu")
   await page.locator("div.css-1hwfws3").first().click()
   await page.getByText("A root option",{exact:true}).click()
   await page.waitForTimeout(2000)
   await page.locator("div#selectOne").click()
   await page.getByText("Mr.",{exact:true}).click()
   await page.locator("div.css-2b097c-container").last().click()
   await page.getByText("div.css-12jo7m5").click()
     await page.waitForTimeout(2000)

})

