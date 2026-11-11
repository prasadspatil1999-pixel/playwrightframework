import{test ,expect} from '@playwright/test'

test("get test single or multiple elemeen", async({page}) =>
{
    await page.goto("https://www.xe.com/currencyconverter/")

    // to get the test value an elment using text context()
    const textvalue = await page.locator("h1.text-center").textContent()
    console.log(textvalue);
    await expect(textvalue).toBe("Xe Currency Converter")
    await expect(textvalue).toContain("Converter")

    await page.goto("https://testautomationpractice.blogspot.com/")
    const alltext= await page.locator("h2.title").allTextContents()
    console.log(alltext)


})