import {test,expect} from "@playwright/test"
test("radio checkbox",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('//input[@value="Upi"]')
    await page.waitForTimeout(2000)
    //asserting
    // console.log(await page.locator('//input[@value="Upi"]').isChecked())
    
    // await expect(await page.locator('//input[@value="Upi"]')).toBeChecked()
    await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()


})