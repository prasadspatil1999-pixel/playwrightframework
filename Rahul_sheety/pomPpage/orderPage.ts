import{Page,Locator} from '@playwright/test'
import { bassepage } from '../basePage/basepage'
export class orderPAge extends bassepage{
    readonly orderID:Locator
    readonly orderHistriypage:Locator
    
    constructor(page:Page)
    {
        super(page)
        this.orderID=this.page.locator("td.em-spacer-1 label").last()
        this.orderHistriypage=this.page.locator("td.em-spacer-1 label").first()
    }
    async orders()
    {
        const orderss=await this.orderID.textContent()
        console.log(orderss)
        const order=orderss?.replaceAll("|"," ").trim()
        return order
        //console.log(order)
    }
}