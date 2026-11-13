import{Page,Locator} from '@playwright/test'
import { bassepage } from '../basePage/basepage';
export class payement extends bassepage
{
    readonly creditNumber:Locator
    readonly CreditCardCvv:Locator
    readonly CreditCardName:Locator
    readonly verfifyEamil:Locator
    readonly enterCityName:Locator
    readonly selectCountry :Locator
    readonly placehodler:Locator

    constructor(page:Page)
    {super(page)
        this.creditNumber=this.page.locator(".input ").nth(0)
        this.CreditCardCvv=this.page.locator(".input ").nth(3)
        this.CreditCardName=this.page.locator(".input ").nth(4)
        this.verfifyEamil=this.page.locator(".details__user input").first()
        this.enterCityName=this.page.locator(".details__user input").last()
        this.selectCountry=this.page.locator("section .ta-results button")
        this.placehodler=this.page.getByText("Place Order ")
        
    }
    async creditcarddetails(creditNumber:string,cvv:string,creditName:string,email:string)
    {
        await this.clear(this.creditNumber)
        await this.fill(this.creditNumber,creditNumber)
        await this.fill(this.CreditCardCvv,cvv)      
        await this.fill(this.CreditCardName,creditName)
        await this.fill(this.verfifyEamil,email)

    }
    async addressDetails(country: string, usercountry: string) {
        // await this.enterCityName.pressSequentially(country)
        // await this.selectCountry.last().waitFor()
        // const allcity = await this.selectCountry.count()
        // for (let i = 0; i < allcity; i++) {
        //     const citys = await this.selectCountry.nth(i).innerText()
        //     console.log(citys)
        //     if (citys.trim() === usercountry) {
        //         await this.selectCountry.nth(i).click()
        //         break
        //     }
        // }

        await this.enterCityName.pressSequentially(country)
        await this.selectCountry.last().waitFor()
        const onecity=await this.selectCountry.count()
               
         for (let i = 0; i <onecity; i++) {
        const citys = await this.selectCountry.nth(i).innerText();

        if (citys.trim() === usercountry) {
            await this.selectCountry.nth(i).click();
            break;
        }
    }
       await this.click(this.placehodler)
    }
}