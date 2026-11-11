import {test , expect} from '@playwright/test'
test ('get start firstlink', async({page})=>
{
    await page.goto("https://playwright.dev/");
    await console.log("Launhed the url");
    await page.getByRole('link',{name: 'Get Started'}).click();
    await console.log("Cliked on the link");

})
