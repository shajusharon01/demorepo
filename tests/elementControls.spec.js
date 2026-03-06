import {test} from "@playwright/test"

test("element controls",async({page})=>{

    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    
    //fill() and type()
    // await page.locator("#name").fill("sharon")
    // await page.locator("#email").type("shar@gmail.com");

    // let text=await page.locator("#name").inputValue()
    // console.log(text);
    
    //innertext() and textcontent()
    // let text= await page.locator('//section[@class="poppins text-[15px]" and text()="Web Elements"]').innerText();
    // let text= await page.locator('//section[@class="poppins text-[15px]" and text()="Web Elements"]').textContent();
    // console.log(text);
    
    
    //allTextContent()
    // let Ttext= await page.locator('//section[@class="poppins text-[15px]"]').allTextContents()
    // console.log(Ttext);
    
    //getattribute
    // test.slow()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // let a=await page.locator('//input[@id="attended"]').getAttribute('type');
    // console.log(a);
    
    //all()
    // await page.goto("https://www.amazon.in/b/?_encoding=UTF8&node=1380442031&pd_rd_w=Sh022&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=VPZDTX39QRR1YSEXNEWS&pd_rd_wg=oOVWB&pd_rd_r=62546ae2-da1d-4cf8-9940-b5829898cb62&ref_=pd_hp_d_atf_unk");
    // let ab= await page.locator('//span[@class="nav-a-content"]').all();
    // console.log(ab);

    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    await page.locator('//input[@name="Attended"]').first().waitFor()
    let ab= await page.locator('//input[@name="Attended"]').all();
    console.log(ab);
})


 