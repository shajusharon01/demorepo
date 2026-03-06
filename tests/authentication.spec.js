import {test} from "@playwright/test"
test("authentication",async({browser})=>{
    const context=await browser.newContext({
        httpCredentials:{
            username: 'authorized',
            password: 'password001'
        }
    })
    const page=await context.newPage()
    await page.goto("https://testpages.eviltester.com/pages/auth/basic-auth/basic-auth-results.html")
    await page.pause()

})