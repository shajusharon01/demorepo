import {test} from "@playwright/test"
import { log } from "console"
test("fixtures",async({browserName,browser})=>{
   // await page.goto("https://www.amazon.in/") 
   console.log(browserName);
   
   let context=await browser.newContext()
   let page=await context.newPage()
   await page.goto("https://www.amazon.in/")
})  