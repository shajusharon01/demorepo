import {test} from "@playwright/test"

test("locators",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student") //username element
    await page.locator("input#password").fill("Password123")   //password
    await page.locator('[class="btn"]').click()
})   