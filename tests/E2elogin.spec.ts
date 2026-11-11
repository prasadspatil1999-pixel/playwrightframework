import{test,expect}from'@playwright/test'
let FirstName= "prasad"
let LastName= "Patil"
let Email="prasadpatil4@gmail.com"
let contact="9082012918"
let password="Prasad@45634"
let conpassword="Prasad@45634"
let  confirmmesage="Account Created Successfully"
let productname="iphone 13 pro"
let Email1="prasadpatil4@gmail.com"
let conu='Ind'
let country ="India"


test("Regsitertologin",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    // await page.getByText("Register here").click()
    // await page.getByPlaceholder("First Name").fill(FirstName) 
    // await page.getByPlaceholder("Last Name").fill(LastName)  
    // await page.getByPlaceholder("email@example.com").fill(Email)  
    // await page.getByPlaceholder("enter your number").fill(contact)
    // await page.locator("select.custom-select").selectOption("Doctor")
    // await page.getByLabel("Female",{exact:true}).check()
    // await page.locator("#userPassword").fill(password)
    // await page.getByPlaceholder("Confirm Passsword").fill(conpassword)
    // await page.locator("[type='checkbox']").click()
    // await page.getByRole('button',{name:'Register'}).click()
    // await expect(page.locator(".headcolor")).toHaveText(confirmmesage)
    // await page.getByRole('button',{name:'Login'}).click()

    await page.locator("#userEmail").fill(Email)
    await page.locator("#userPassword").fill(password)
    await page.getByRole('button',{name:'Login'}).click()
    
    const products= page.locator("div.card-body")
    await products .last().waitFor()
    const countofproduct=await products.count()
    for(let i= 0;i<countofproduct; i++)
    {
        const producttext= await products.nth(i).locator("h5").textContent()
        if(producttext===productname)
        {
            await products.nth(i).locator("button.w-10").click()
            break
        }

    }

await page.waitForTimeout(1000)

await page.locator("[routerlink='/dashboard/cart']").click()
await page.getByRole('button',{name: 'Checkout'}).click()
await page.locator("[value='4542 9931 9292 2293']").clear()
await page.locator("[value='4542 9931 9292 2293']").fill("567898765438")
await page.locator("input.txt").nth(1).fill("9876543210")
await page.locator("input.input.txt").nth(2).fill("Prasad Sunil Patil")
//await page.locator("[type='text']").nth(3).fill("prasa948u5")
//await page.getByRole('button',{name:'Apply Coupon'}).click()
await page.waitForTimeout(1000)
await expect(page.locator("div.user__name input").first()).toHaveValue(Email1)
await page.locator("div.form-group  input").last().pressSequentially(conu)

//await page.locator("div.form-group  input").last().pressSequentially(conu)
const ddresult=page.locator("section.ta-results button")

await ddresult.first().waitFor()

  const ddresultCount=await ddresult.count()


for(let i=0; i<ddresultCount; i++)
    {

   const countryName=  await ddresult.nth(i).innerText()
   if(countryName.trim()==country)
   {
    await ddresult.nth(i).click()
    break
   }
   await page.waitForTimeout(3000)
}
   await page.getByText("Place Order").click()
    await expect(page.locator("h1.hero-primary")).toContainText (" Thankyou for the order. ")

   const verifymessage=await page.locator("h1.hero-primary").textContent()
   console.log(verifymessage)
   const order=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   const orderid=order!.replaceAll("|","").trim()
   console.log(orderid)
   console.log(order)

   await page.getByRole('button',{name:'ORDERS'}).click()
   await expect(page.locator("table tbody")).toBeVisible()
   const row= page.locator("table tbody tr")
   const rowcount= await row.count()
   for(let i=0; i<rowcount; i++)

    {
         const ordertest= await row.nth(i).locator("th").innerText()
         {
            if(ordertest==(orderid))
            {
                await row.nth(i).locator("button").first().click()
                break
            }
         }
    }
    await expect(page.locator("div.col-text")).toContainText(orderid)
    const name0= await page.locator('.text').nth(0).textContent()
    console.log(name0)
    const title= await page.locator('.title').nth(0).textContent()
    console.log(title)

    const subject= await page.locator('.subject').nth(0).textContent()
    console.log(subject)

    const price= await page.locator('.price').nth(0).textContent()
    console.log(price)
    await page.locator('.btn ').nth(4).click()

        


})