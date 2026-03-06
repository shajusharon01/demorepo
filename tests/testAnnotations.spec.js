import {test} from "@playwright/test"
test.fail("test annotations",async({page})=>{
    //console.log("test 1");
    await page.goto("sdasfq223")
})
test("test 2",async({browserName})=>{
    test.skip(browserName=="firefox")
    console.log("test 2");
    
})
test("test 3",async()=>{
    test.setTimeout(4000);
    console.log("test 3");
    
})
test("test 4",async({browserName})=>{
    test.slow(browserName=="firefox")
    console.log("test 4");
})
test("test 5",async()=>{
    test.fixme()
    console.log("test 5");
})
test("test 6",async()=>{
    test.setTimeout(4000);
    console.log("test 3");
})