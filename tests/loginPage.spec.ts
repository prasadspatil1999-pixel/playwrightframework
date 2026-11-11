import{test,expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'

let url="https://rahulshettyacademy.com/client/#/auth/login"
let username="prasadpatil4@gmail.com"
let passsword="Prasad45634"
let inpassword="prasadpatil"
let error="Incorrect email or password."

test("End to End testing",async({page})=>
{
    const LoginPage= new loginPage(page)
    await LoginPage.lunhURL(url)
    await LoginPage.validation(username ,passsword)
    await expect(LoginPage.errorMessage).toContainText(error)
})
