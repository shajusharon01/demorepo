import {test} from "@playwright/test"
import landing from "../PageObjectModel/landing.page.js"
import signup from "../PageObjectModel/signup.page.js"
import signin from "../PageObjectModel/signin.page.js"
import home from "../PageObjectModel/home.page.js"
import createticket from "../PageObjectModel/createticket.page.js"
test("Home",async({page})=>{

    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })

    let landingpg=new landing(page)
    let signuppg=new signup(page)
    let signinpg=new signin(page)
    let homepg=new home(page)
    let createticktpg=new createticket(page)

    //launch url
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
    //click on signup
    await landingpg.signupLink.click()
    await page.waitForTimeout(2000)

    //pass name for nameTF
    await signuppg.nametf.fill("sharon")
    //emal
    await signuppg.emailtf.fill("sharon07@gmail.com")
    //passwordTF
    await signuppg.passtf.fill("sharonshaju")
    //repasswordTF
    await signuppg.repasstf.fill("sharonshaju")
    //contact
    await signuppg.contacttf.fill("1234567891")
    //gender radio button
    await signuppg.maleRadiobutton.click()
    //click on submit
    await signuppg.submitButton.click()

    //email to login
    await signinpg.emailTF.fill("sharon07@gmail.com")
    //password to login
    await signinpg.passTF.fill("sharonshaju")
    //click on login
    await signinpg.loginButton.click()

    //create ticket
    await homepg.createTicketLink.click()
    //add subject for ticket
    await createticktpg.subjectTF.fill("Logo Color")
    //select an option from task type dropdown
    await createticktpg.taskTypeDropdwn.selectOption({value:"ot1"})
    //priority dropdown
    await createticktpg.priorityDropdwn.selectOption({value:"question"})
    //description tf
    await createticktpg.descriptionText.fill("Logo color is not as per requirement")
    //click on submit
    await createticktpg.sendButton.click()

    //click on view ticket
    await homepg.viewTicketLink.click()
    //take ss
    await page.screenshot({path:"screenshot/ticketss.png"})




    
})