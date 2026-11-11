import{test,expect} from '@playwright/test'
test("End to End Testing",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(simple)=>
    {
        console.log("Simple alert message show in Cnsole = :"+ "  " + simple.message())
        simple.accept()
    })
    await page.getByRole('button',{name:'Simple Alert'}).click()
})

test("Confirmation Alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(Confirmation)=>
    {
        console.log("Confirmation Alert Message show = : "+ " "+ Confirmation.message())
        Confirmation.accept()
    })
    await page.getByRole("button",{name:"Confirmation"}).click()
    const message=await page.locator("p#demo").textContent()
    console.log(message)
    await expect(await page.locator("p#demo")).toHaveText("You pressed OK!")
})

test("Prompt Alert",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const mrss="Test"
    page.on('dialog',(Prompt)=>
    {
        console.log(Prompt.message())
        Prompt.accept(mrss)
       // Prompt.accept()

    })
    await page.getByRole('button',{name:'Prompt Alert'}).click()
    await expect(page.locator("p#demo")).toContainText(`Hello ${mrss}!`)

})
