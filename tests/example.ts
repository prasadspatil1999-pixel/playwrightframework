import { test ,expect } from "@playwright/test";
test("get standard link", async ({page})=>
{
    await page.goto('https://playwright.dev/');
    await console.log("Launched the url");
    await page.getByRole('link',{name : 'Get started'}).click();
    await console.log("Cliked on the link")
})

