import { Locator } from '@playwright/test';

export  class loginPage{
   private testpage
   private  username:Locator
   private password : Locator
   private loginBtn
   errorMessage
   homePageIdentifier


   constructor(Page)
   {
    this.testpage=Page
    this.username=this.testpage.locator("input#userEmail")
    this.password=this.testpage.locator("input#userPassword")
    this.loginBtn=this.testpage.locator("input#login")
    this.errorMessage = this.testpage.locator("toast-container")
    this.homePageIdentifier = this.testpage.locator("fa-sign-out")
   }

   //launh the url 
   // fill the user name passsword alik on login btn
n
   async lunhURL(url)
   {
    await this.testpage.goto(url)
   }
   async validation(username , password)
   {
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginBtn.click()
   }
   async invalidation(username , inpassword)
   {
    await this.username.fill(username)
    await this.password.fill(inpassword)
    await this.loginBtn.click()
   }
    
 }




