import{expect, test} from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("input#twotabsearchtextbox")).toBeEditable()
    await page.locator("input#twotabsearchtextbox").fill("airfryer")
    await page.waitForTimeout(2000)
    await page.locator("#nav-search-submit-button").click()
    await page.waitForTimeout(2000)
    let prodtitle=await page.locator('//div[@class="puisg-col-inner"]/ancestor::div[@class="sg-col-inner"]/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/child::span[contains(text(),"Wipro Elato CAF 202 Digital Air Fryer")]').textContent()
    await expect(prodtitle).toContain("Wipro Elato CAF 202 Digital Air Fryer | PTFE Free Ceramic Coated | 1800W | 7.5 L Capacity | Transparent Full Window | Digital Touch Control | 12 Preset Modes | Black")
   // console.log(prodtitle);
    let prodprice=await page.locator('//div[@class="puisg-col-inner"]/ancestor::div[@class="sg-col-inner"]/descendant::div[@class="puisg-row puis-desktop-list-row"]/descendant::span[text()="9,299"]').textContent()
    await expect(prodprice).toContain("9,299")
    //console.log(prodprice);
    
    
    
    

})