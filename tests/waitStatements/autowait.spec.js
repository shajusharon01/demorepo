import {test} from "@playwright/test"
test("Auto wait",async ({page})=>{
    //page.setDefaultTimeout(3000)
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('//input[@id="attended"]').check();
})

