import{Page,Locator} from '@playwright/test'
import { bassepage } from '../basePage/basepage'
 export class mycart extends bassepage{
    readonly Checkout:Locator
    constructor (page:Page)
    {
        super(page)
        this.Checkout=this.page.getByText("Checkout")
    }
    async mycart()
    {
        await this.click(this.Checkout)
    }
 }