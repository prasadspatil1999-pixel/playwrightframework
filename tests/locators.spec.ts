import {test ,  expect } from "@playwright/test";
import { timeLog } from "node:console";
import { TIMEOUT } from "node:dns";

test('Login the application ',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await console.log('Open the url properly')
    await page.locator('input#username').pressSequentially("student")
   // await page.locator('input#username').fill("student")
    await console.log(" Enter student name in user name");
    // to have value(value) --  valdiate the value of the text box 
    await expect(page.locator('input#username')).toHaveValue('student')
    await page.getByLabel("Password").fill("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123");
    await page.getByRole('button',{name : 'Submit'}).click();
    await expect (page .locator("h1.post-tittle")).toBeVisible()
    await expect(page.locator("h1.post-tittle")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-tittle")).toContainText("Logged In")
    



})