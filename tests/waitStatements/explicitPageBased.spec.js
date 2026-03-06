import {test} from "@playwright/test"

// test("Paage Based",async({page})=>{
//     await page.goto("https://www.amazon.in/")

//     waitForNavigation
//     await Promise.all([
//     await page.waitForNavigation(),
//     await page.click("#nav-cart-text-container") ])
   
//     await page.click("#nav-cart-text-container")
//     await page.waitForLoadState('load',{timeout:3000})    
// })

test("waitForevent",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0",{waitUntil:"load"})
    await page.fill('#writeArea', "I am downloading the file")
    
    let [downloadfile]= await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton') ])
    console.log(await downloadfile.path());
})

test.only("Custom Waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("HP laptop")

    await page.waitForFunction(()=>{
        let ele=document.querySelectorAll('.s-suggestion-container')
        return ele.length>2
    })

    let allautosugg=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(allautosugg);
    
})
