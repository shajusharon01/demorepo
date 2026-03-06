import {expect, test} from "@playwright/test" 
test.skip("manually",async({browser})=>{
    //manually creating multi-tabs
    let context=await browser.newContext()
    let page1=await context.newPage()
    await page1.goto("https://www.nike.in/")
    let page2=await context.newPage()
    await page2.goto("https://in.puma.com/in/en")
    let page3=await context.newPage()
    await page3.goto("https://www.adidas.co.in/")
})

test.skip("user actions",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_1_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_1_0_na_na_na&as-pos=1&as-type=TRENDING&suggestionId=mobiles&requestId=406a42ed-43c1-46f8-b659-035a97dcb532")
    await page.click('(//div[@class="RG5Slk"])[2]')
    await page.waitForTimeout(3000)

})

test.skip("control current page",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=iphone+17+pro&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_4_6_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_4_6_na_na_ps&as-pos=4&as-type=RECENT&suggestionId=iphone+17+pro&requestId=bc3ed1a0-557c-4bf7-b6bf-4196f04d0872&as-backfill=on")
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.click('//div[text()="Apple iPhone 17 Pro (Deep Blue, 256 GB)"]')
    ])
    console.log( page2.url());
    await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=iphone+17+pro&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_4_6_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_4_6_na_na_ps&as-pos=4&as-type=RECENT&suggestionId=iphone+17+pro&requestId=bc3ed1a0-557c-4bf7-b6bf-4196f04d0872&as-backfill=on")
})
