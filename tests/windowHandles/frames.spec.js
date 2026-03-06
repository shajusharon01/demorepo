import{expect, test} from "@playwright/test"
test("Frames count",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame=page.frames()
    console.log(frame.length);

})

test("frame method",async ({page})=>{
    let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/'})
    await frame1.locator('//input[@name="mytext1"]').fill("hello12345")
    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('hello12345')
})
