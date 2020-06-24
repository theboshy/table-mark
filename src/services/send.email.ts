import emailjs from 'emailjs-com';
import {User} from "../models/user";


export const SendEmail = (props: any) => {
    let user = User;
    user = props.user;
    let num = props.level;
    let lvlScore = user.score[num - 1];
    let info: any = {userName: user.name, level: lvlScore.level, scoreLevel: lvlScore.score};
    info.new="";
    emailjs.send("gmail", "template_cJPH7HCg", info, 'user_fpNDLPWJm8a7JTZCHRRAU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log("error, acá hay un error");
            console.log(error.text);
        });
}

