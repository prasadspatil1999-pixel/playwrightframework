import{test,expect}from'@playwright/test'
let username="prasadrpatil0095@gmail.com"
let password="Prasad@460535"
let productName = "iphone 13 pro" ;
let conu='Ind'
let country =   "India"
test("E2E Automation Scenario",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

   // await page.getByPlaceholder("email@example.com").fill(username)
    await page.getByPlaceholder("email@example.com").fill("prasadrpatil0095@gmail.com")

    //await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByPlaceholder("enter your passsword").pressSequentially("Prasad@460535")

    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

       // await page.waitForTimeout(1000)

     const products= page.locator("div.card-body")
     // find () the number of the product are availabel on the page 
    await products .last().waitFor()
       //count () Returns the number of the element matching with the locator 
    const countOfProduct= await products.count()
    console.log(countOfProduct)

   // await products.filter({hasNotText:  `productName`}).locator("button ",{name:"Add to Cart"}).click()

    for(let i=0; i<countOfProduct; i++)
    {
        const producttext = await products.nth(i).locator("h5").textContent() //div.cardbody h5


        if(producttext===productName)
        {
            await products.nth(i).locator("button.w-10").click()
            break
        }
    }

//Click on the cart
await page.locator("[routerlink='/dashboard/cart']").click()
await page.getByRole('button',{name:'Checkout'}).click()
await page.waitForTimeout(1000)
await expect(page.locator("div.user__name input").first()).toHaveValue(username)

//INDIA  div.form-group''
await page.locator("div.form-group  input").last().pressSequentially(conu)

//await page.locator("div.user__name input").last().pressSequentially("Amer")

const ddResult =page.locator("section.ta-results button")
await ddResult.first().waitFor()

const ddresultCount= await ddResult.count()

for(let i=0; i<ddresultCount; i++)
{
       const countryName= await ddResult.nth(i).innerText() //div.cardbody h5
       if(countryName.trim()==country)
       {
         await ddResult.nth(i).click()
         break
       }
       await page.waitForTimeout(3000)
}
       await page.locator("a.btnn ").click()


 })
