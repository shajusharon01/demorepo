class signin{
    constructor(page){
        this.emailTF=page.locator('//input[@name="email"]')
        this.passTF=page.locator('//input[@name="password"]')
        this.loginButton=page.locator('//button[@name="login"]')
    }
}
export default signin