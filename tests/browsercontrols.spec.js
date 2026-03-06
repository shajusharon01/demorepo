import {chromium, test, webkit} from "@playwright/test"
// test("browser controls",async({page,browser})=>{

    //portsize and viewport
    // await page.goto("https://www.google.com/")
    // let sizee=page.viewportSize();
    // console.log(sizee);
    // await page.setViewportSize({width:1080,height:640})
    // let size=page.viewportSize();
    // console.log(size);
    // })
    //title/

    // await page.goto("https://www.google.com/")
    // console.log(await page.title());
    
    // //url
    // console.log(await page.url()) ;
    
    // cookies
    // let context=await browser.newContext();
    // let page1 =await context.newPage()
    // console.log(await context.cookies());
// })
// chromium launch
// test.only("instance",async()=>{
//     let browser=await webkit.launch()
//     let context =await browser.newContext()
//     let page1=await context.newPage()
//     await page1.goto("https://www.google.com/")
// })

test("ss",async({page})=>{
    await page.goto("https://www.google.com/")
    // await page.screenshot({path:"screenshot/ss.png"})
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/${time}.png`})
})
