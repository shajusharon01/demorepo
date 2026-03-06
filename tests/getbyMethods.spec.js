import{test} from "@playwright/test"
import { link } from "node:fs";

test("Getbymethods",async({page})=>{
    // await page.goto("https://demo.nopcommerce.com/login?ReturnUrl=%2Fvendor%2Fapply")
    // await page.getByLabel("Email:").fill("aaa1234@gmail.com")
    // await page.getByLabel("Password:",{exact:true}).fill("yeeeeeeyxxjxdj")
    // await page.getByPlaceholder("Search store").click()
    // await page.getByAltText("Computer").first().click()
    // await page.getByTitle("Show products in category Camera & photo").click()


   // ----------getByRole-----------------
    // test.slow()
    // await page.goto("https://www.flipkart.com/")
    // await page.getByRole('link',{name: 'Minutes'}).click();
    //here in html tag it was href(we know that its a link, and in playwright we pass it as link only not href)

    //------------getbytestid--------------
    test.slow()
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user");
    await page.getByTestId('password').fill("secret_sauce")
    await page.getByTestId('login-button').click();
})