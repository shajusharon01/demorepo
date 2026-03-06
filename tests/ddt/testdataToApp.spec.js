import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("pass testdata to app",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet=book.getWorksheet("Sheet1")
    let alldata=[]
    for (let r = 1; r<=sheet.actualRowCount; r++) {
        let row=sheet.getRow(r)
        let url=row.getCell(1).toString()
        let usn=row.getCell(2).toString()
        let pwd=row.getCell(3).toString()
        alldata.push({url:url,usn:usn,pwd:pwd})
    }
    console.log(alldata);

    for (let d of alldata) {
        await page.goto(d.url)
        await page.waitForTimeout(3000)
        await page.getByRole("link",{name:"CRM"}).click()
        let p2=page.waitForEvent("popup")
        await page.getByRole("link",{name:"Small CRM"}).click()
        let page2=await p2
        await page2.getByRole("link",{name:"Admin"}).click()
        await page2.locator("#txtusername").fill(d.usn)
        await page2.locator("#txtpassword").fill(d.pwd)
        await page2.getByRole("button",{name:"Login"}).click()
        await page2.close()
        await page.waitForTimeout(2000)

    }
    
})
