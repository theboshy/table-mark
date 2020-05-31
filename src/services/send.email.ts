import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export class SendEmail{

    sendEmail(e: any, userInfo: any) {
        e.preventDefault();
        console.log(e);
        console.log(userInfo);
        emailjs.send("gmail", "template_cJPH7HCg", userInfo, 'user_fpNDLPWJm8a7JTZCHRRAU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log("error, acá hay un error");
                console.log(error.text);
            });
    }

}