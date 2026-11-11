import{test,expect} from '@playwright/test'
let Email="prasadpatil4@gmail.com"
let contact="9082012918"
let password="Prasad@45634"
let conpassword="Prasad@45634"
let selr="ADIDAS ORIGINAL"
test("end to end ", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill("prasadpatil4@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Prasad@45634")
    await page.getByRole('button',{exact:true}).click()
    const allproducawaito = page.locator("div.card-body")
    await allproducawaito.last().waitFor()
    const oneproduct= await allproducawaito.count()
    for(let i=0; i<oneproduct; i++)
    {
        const seelctpro=await allproducawaito.nth(i).locator("h5").textContent()
        if(seelctpro===selr)
        {
            await allproducawaito.nth(i).locator("button.w-40").click()
            break
        }

    }



}
)