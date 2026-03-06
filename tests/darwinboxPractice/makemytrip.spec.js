import{test} from "@playwright/test"
test("makemytrip",async({page})=>{
    await page.goto("https://www.makemytrip.global/?cc=in")
    await page.locator('//span[@class="commonModal__close"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//label[@for="departure"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//div[@class="DayPicker-Month"]/descendant::div[text()="March 2026"]/ancestor::div[@class="DayPicker-Month"]/descendant::p[text()="9"]').click()
    await page.waitForTimeout(2000)
    })