import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test ("read single data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet1")
    let data =await sheet.getRow(1).getCell(1).toString()
    console.log(data);
})

test.only("read multiple data",async({page})=>{
    let book =new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet=book.getWorksheet("Sheet2")
    for(let c=1;c<=sheet.actualColumnCount;c++ ){
        for(let row=1;row<=sheet.actualRowCount;row++){
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
            
        }
    }
})
