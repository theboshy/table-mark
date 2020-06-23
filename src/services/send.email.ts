import emailjs from 'emailjs-com';
import {User} from "../models/user";


export const SendEmail = (props: any) => {
    let user = User;
    user = props.user;
    let lvlScore = user.score[props.level];
    let info = {username: user.name, level: lvlScore.level, scoreLevel: lvlScore.score, json: user}
    emailjs.send("gmail", "template_cJPH7HCg", info, 'user_fpNDLPWJm8a7JTZCHRRAU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log("error, acá hay un error");
            console.log(error.text);
        });
}

