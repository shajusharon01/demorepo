import{test} from "@playwright/test"
import data from "../../testData/data.json"
test("testdata",async({page})=>{
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
        await page.getByRole("button",{name:"Submit"}).click()
        let title=await page.title()
        if(title=="Logged In Successfully | Practice Test Automation"){
            console.log("Valid Cred");
        }else{
            console.log("Invalid cred");
            
        }
    }
})