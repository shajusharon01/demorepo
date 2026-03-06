import {test} from "@playwright/test"
import { text } from "node:stream/consumers"
test.skip("dropdowns",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#select3")
    await page.waitForTimeout(2000)
    await page.locator("#select3").selectOption({value:'Canada'})
    await page.waitForTimeout(2000)
    await page.locator("#select3").selectOption({value:'Germany'})
    await page.waitForTimeout(2000)
    await page.locator("#select3").selectOption({index:1}) 
    await page.waitForTimeout(2000)
})

test.skip("multiselect",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption([{value:'Mens Casual Premium Slim Fit T-Shirts '},{value:'Solid Gold Petite Micropave '},{value:'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED '}])
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    await page.waitForTimeout(2000)
})

test("custom",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@type="text"]').fill("iphone")
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="submit"]').click()
    await page.waitForTimeout(2000)
    //Approach 1 (Identify all the elements and iterate through it)
    // await page.locator('//span[@class="a-button-text a-declarative"]').click()
    // await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    // await page.waitForTimeout(2000)
    // let options=await page.locator('//a[@class="a-dropdown-link"]').all()
    // for(let option of options){
    //     let text=await option.textContent()
    //     if(text.includes('Customer ')){
    //         await option.click()
    //     }
    // }
    // await page.waitForTimeout(2000)


    //Approach 2 (Direct Xpath)
    await page.locator('//span[@class="a-button-text a-declarative"]').click()
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Newest Arrivals']").click()
    await page.waitForTimeout(2000)


    //Approach 3 (Using Dropdown text)
    await page.locator('//span[@class="a-button-text a-declarative"]').click()
    let text="Price: High to Low"
    await page.locator(`//a[@class="a-dropdown-link" and text()="${text}"]`).click()
    await page.waitForTimeout(3000)
})

test.skip("custom1",async({page})=>{


})