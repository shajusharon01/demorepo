import {test} from "@playwright/test"
test("keyboard actions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(2000)
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
    await page.keyboard.insertText("sharon")
    await page.waitForTimeout(2000)
    await page.keyboard.down("Backspace")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Control+c")
    await page.goto("https://www.amazon.in/b/?_encoding=UTF8&node=976392031&ref_=sv_top_elec_mega_2")
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+v")
    await page.waitForTimeout(2000)
    for (let index = 1; index < 10; index++){
        await page.keyboard.down('ArrowDown')
   
    }
})

