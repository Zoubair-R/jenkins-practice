import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https:practice.cydeo.com");

  // await page.waitForTimeout(3000);

  let actualTitle = await page.title();

  console.log(actualTitle);
});



test("Getting the current url of the page", async ({ page }) => {

    await page.goto("https:practice.cydeo.com");
    let actualUrl = page.url();
});




test('Set the widow size', async ({ page }) => {

    await page.goto('https://practice.cydeo.com');
    await page.waitForTimeout(3000);
   // await page.setViewportSize({ width:1500, height: 800 });
  //  await page.waitForTimeout(3000);


  
});

