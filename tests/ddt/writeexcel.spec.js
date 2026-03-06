import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("write data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet =book.getWorksheet("Sheet3")
    if(!sheet){
        sheet=book.addWorksheet("Sheet3")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("Shoes")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let allopt=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    for(let text of allopt){
        let i=allopt.indexOf(text)
        sheet.getRow(i+1).getCell(1).value=text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
})