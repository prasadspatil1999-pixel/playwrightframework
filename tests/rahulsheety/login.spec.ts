import path from 'node:path'
import{test} from '../../Rahul_sheety/pageFixture/pagefixture'
import { Exceldata } from '../../Rahul_sheety/Utility/Excel'
const filepath=path.join(__dirname,'../../TestData/excel.xlsx')
const filename="Login"
const testdata:any=Exceldata.getData(filepath,filename)
const data=testdata[0]
let name="ADIDAS ORIGINAL"
//let ciy="India"
test("Application login",async({login,addtocart,mycart,payment,order})=>
{
    await login.launchurl(data.url)
    await login.logininfo(data.username,data.password)
    await addtocart.pronames(data.productName)
    await mycart.mycart()
    await payment.creditcarddetails(data.CardNumber,data.cvv,data.Nameofcard,data.username)
    await payment.addressDetails(data.country,data.ciy)
    const orderhistorey=await order.orders()
    console.log("Order show = ",orderhistorey)
    
})