class signup{
    constructor(page){
        this.nametf=page.locator("input#name")
        this.emailtf=page.locator("input#email")
        this.passtf=page.locator("input#password")
        this.repasstf=page.locator("input#cpassword")
        this.contacttf=page.locator('//input[@name="phone"]')
        this.maleRadiobutton=page.locator('//input[@type="radio" and @value="m"]')
        this.femaleRadioButton=page.locator('//input[@type="radio" and @value="f"]')
        this.submitButton=page.getByRole('button',{name:"submit"})

    }
}
export default signup