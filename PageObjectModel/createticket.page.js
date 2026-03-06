class createticket{
    constructor(page){
        this.subjectTF=page.locator('//input[@name="subject"]')
        this.taskTypeDropdwn=page.locator('//select[@name="tasktype"]')
        this.priorityDropdwn=page.locator('//select[@name="priority"]')
        this.descriptionText=page.locator('//textarea[@name="description"]')
        this.sendButton=page.locator('//input[@name="send"]')
    }
}
export default createticket