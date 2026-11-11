import{test, expect} from '@playwright/test'
test ("Get text from an element and multiple element",async({page})=>
{
    await page.goto("https://www.xe.com/currencyconverter/")

    //textContent() this method is use to value enter in the console 

    const textvalue=await page.locator("h1.text-center").textContent()
    console.log(textvalue)
    expect(textvalue).toBe("Xe Currency Converter")
    expect(textvalue).toContain("Converter")

    //allTextContents()
    //this method is use to all  value show in console value 
    await page .goto("https://testautomationpractice.blogspot.com/")
    const alltext= await page.locator("h2.title").allTextContents()
    console.log(alltext)

})