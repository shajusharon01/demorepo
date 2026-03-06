import {test} from "@playwright/test"
test("Amazon Mobile",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//button[@class="a-button-text"]').click()
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 17")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let mobile=await page.locator('(//span[text()="1,34,900"])[1]').textContent()
    console.log(mobile);
    

})