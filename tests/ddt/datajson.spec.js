import {test} from "@playwright/test"
import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/shaju/OneDrive/Desktop/playwright/testData/singlesetdata.json")
let datafile=fs.readFileSync("C:/Users/shaju/OneDrive/Desktop/playwright/testData/multisetdata.json")
let data=JSON.parse(datafile)
test("get data from data",async({page})=>{
    // console.log(data.greet);
    data.forEach(d => {
        console.log(d.greet);
        
        
    });
})

//commanded lines are for executing single set data from json file into the script

