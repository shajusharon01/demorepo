import {test} from "@playwright/test"
test("hardcod",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000);
    await page.getByText("Username",{exact:true}).fill("student");
    await page.waitForTimeout(2000);
    await page.getByText("Password ",{exact:true}).fill("Password123")
    await page.waitForTimeout(2000);
    await page.locator('//button[@id="submit"]').click();
    await page.waitForTimeout(2000);


})