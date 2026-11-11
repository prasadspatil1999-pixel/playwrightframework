import {test ,  expect } from "@playwright/test";
test("select and validate radio button and checkbox",async ({page})=>
    {
               //  clcik () click on the element 
        // check() check the radio button or checkbox  but it has vascilaly support radio button or check box
        await page.locator("#male").check()
        await expect (page.locator("#male")).toBeChecked()

        await page.getByLabel('Tuesday', {exact : true}).check()
        await expect(page.getByLabel('Tuesday', {exact : true})).toBeChecked()
        
        // uncheck the check box use uncheck()
      //  await page.getByLabel('Tuesday', {exact : true}).click()
        await page.getByLabel('Tuesday', {exact : true}).uncheck()
        await expect(page.getByLabel('Tuesday', {exact : true})).not .toBeChecked()
        

    })

    
