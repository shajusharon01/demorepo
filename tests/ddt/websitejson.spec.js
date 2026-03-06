import {test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/shaju/OneDrive/Desktop/playwright/testData/websitedata.json")
let data=JSON.parse(datafile)
test("single set data into web application",async({page})=>{
    await page.goto(data.url)
    await page.locator("input#username").fill(data.username)
    await page.locator("input#password").fill(data.password)
    await page.getByRole("button",{name:"Submit"}).click()
    let title=await page.title()
    console.log(title);
    
})

test.only("multile set of data",async({page})=>{
    for(let testdata of data){
        let url=testdata.url
        let u=testdata.username
        let p=testdata.password
        await page.goto(url)
        await page.locator("input#username").fill(u)
        await page.locator("input#password").fill(p)
        await page.getByRole("button",{name:"Submit"}).click()
        let title=await page.title()
        if(title=="Logged In Successfully | Practice Test Automation"){
            console.log("Valid");
            
        }else{
            console.log("invalid cred");
            
        }
    }
})


