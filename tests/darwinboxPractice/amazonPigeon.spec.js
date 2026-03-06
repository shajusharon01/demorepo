import {test} from "@playwright/test"
test("pigeon airfryer",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("input#twotabsearchtextbox")).toBeEditable()
    await page.locator("input#twotabsearchtextbox").fill("Pigeon Airfryer")
    await page.waitForTimeout(2000)
    await page.locator("#nav-search-submit-button").click()
    await page.waitForTimeout(2000)
    await page.locator('')

})