import {test} from "@playwright/test"

test("mouse controls",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('//section[text()="Button"]').click({button:'right'})
    // await page.locator('//section[text()="Button"]').dblclick()

    //click
    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    // await page.waitForTimeout(2000)
    // await page.locator('//button[@id="btn"]').click({button:'left'})
    // await page.waitForTimeout(2000)

    //right click
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    // await page.waitForTimeout(2000)
    // await page.locator('//button[@id="btn_a"]').click({button:'right'})
    // await page.waitForTimeout(2000)
    // await page.locator('//div[text()="Yes"]').click()

    //double click
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    // await page.waitForTimeout(2000)
    // await page.locator('//button[@id="btn_a"]').click({clickCount:2})
    // await page.waitForTimeout(2000)

    //disabled button
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    // await page.waitForTimeout(2000)
    // await page.locator('//input[@type="checkbox"]').dispatchEvent('click')
    // await page.waitForTimeout(2000)

    //Down and up
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator('//div[@id="circle"]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

    //Mouse Hover
    // await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    // await page.waitForTimeout(2000)
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.move(0,500)
    // await page.waitForTimeout(2000)

})

test.skip("Scrolling",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    // await page.mouse.wheel(10,10000) 
    // await page.waitForTimeout(2000)
    await page.locator('//button[text()="Accept Our Policy"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000)
})

test.only("DragAndDrop",async({page})=>{

    //mouse actions
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.locator("//div[text()='Drag Me']").hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.mouse.move(0,300)
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

    //drag and drop to target with mouse actions
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]').hover()
    // await page.mouse.up()

    //drag and drop by taking element location
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)
    let box=await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]').boundingBox()
    await page.mouse.move(box.x,box.y)
    await page.waitForTimeout(2000)
    await page.mouse.up()


    //dragTo

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    let source=await page.locator('//div[text()="Mobile Charger"]')
    let target=await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]')
    await source.dragTo(target)
    await page.waitForTimeout(2000)
})
