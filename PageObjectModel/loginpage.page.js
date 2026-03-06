class loginpage{
    constructor(page){
        this.usernametf=page.locator("input#username")
        this.passwordtf=page.locator("input#password")
        this.submitButton=page.getByRole("button",{name:"Submit"})
    }
}
export default loginpage