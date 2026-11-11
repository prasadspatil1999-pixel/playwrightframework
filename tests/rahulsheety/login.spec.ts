import path from 'node:path'
import{test} from '../../Rahul_sheety/pageFixture/pagefixture'
import { Exceldata } from '../../Rahul_sheety/Utility/Excel'
const filepath=path.join(__dirname,'../../TestData/excel.xlsx')
const filename="Login"
const testdata:any=Exceldata.getData(filepath,filename)
const data=testdata[0]
let name="ADIDAS ORIGINAL"
test("Application login",async({login,addtocart})=>
{
    await login.launchurl(data.url)
    await login.logininfo(data.username,data.password)
    await addtocart.pronames(name)
})