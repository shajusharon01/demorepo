import {test} from "@playwright/test"
test("element waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//div[@role="row"]',{hasText:" for women"}).waitFor({timeout:60000})
    let autosugg=await page.locator('//div[@role="row"]').allTextContents()
    console.log(autosugg);
    
})