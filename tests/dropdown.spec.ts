import{test , expect} from '@playwright/test'
test("dropdown",async({page})=>{

    await page.goto("https://practice.expandtesting.com/dropdown")
   // await page.locator("#country").selectOption("IN")
   // await page.waitForTimeout(2000)
  //  await page.locator("#country").selectOption({value:"IN"})

//await page.locator("#country").selectOption({label:"India"})

 //await page.locator("#country").selectOption({index:25})

 // multiple sction dropdown ===================================================
 await page.goto("https://demoqa.com/select-menu")

await page.locator("#cars").selectOption(["saab", "Audi"])
await page.locator("#cars").selectOption([{value:"volvo"},{label :'Opel'},{index:1}])

})

test(" not select dropdown",async({page})=>
{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator()
    
})
