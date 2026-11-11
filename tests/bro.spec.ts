import { test, expect } from "@playwright/test";

test("Facebook Login UI Test", async ({ page }) => {

  // Step 1: Open Facebook login page
  await page.goto("https://www.facebook.com/");
  console.log("Facebook login page opened");

  // Step 2: Enter Email
  await page.getByLabel("Email address or phone number").fill("prasadpatil1495@gmail.com");

  // Step 3: Enter Password
  await page.getByLabel("Password").fill("prasad460535");

  // Step 4: Click Login button
  await page.getByRole("button", { name: "Log in" }).click();

  console.log("Login button clicked");

  // Step 5: Validation (UI level – error message)
  // await expect(
  //   page.getByText(/incorrect|wrong|invalid/i)
  // ).toBeVisible();

  

});
