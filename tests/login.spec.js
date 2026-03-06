import {test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page"
import logindata from "../testData/logindata.json"
test("",async({page})=>{
 let linpage=new loginpage(page)
 //importing from json 
 let url=logindata.url
 let usn=logindata.usn
 let pwd=logindata.pwd
 //importing from POM
 //launch url
 await page.goto("https://practicetestautomation.com/practice-test-login/")
 //pass username
 await linpage.usernametf.fill("student")
 //pass password
 await linpage.passwordtf.fill("Password123")
 //click on submit
 await linpage.submitButton.click()
 await page.waitForTimeout(4000)
})