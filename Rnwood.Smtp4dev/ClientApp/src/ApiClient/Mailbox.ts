
export default class Mailbox {
    name: string;
    recipients: string;
    subjectPrefix: string;
 
    constructor(name: string, recipients: string, subjectPrefix: string) {
         
        this.name = name;
        this.recipients = recipients;
        this.subjectPrefix = subjectPrefix;
    }


}
