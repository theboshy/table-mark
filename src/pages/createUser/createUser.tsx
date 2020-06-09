import React, {FunctionComponent, useEffect, useState} from 'react';
import {User} from "../../models/user";
import {StorageService} from "../../services/save.local.storage";
import {Keys} from "../../keys";
//Imports of material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {CustomButton} from "../../components/button/button";
import {Grilla} from "../../layout/grilla";

export const CreateUserPage = (props: any)=>{

    const [iconUser, setIconUser] = useState('');
    const storageService = new StorageService();
    let user = User;
    user = props.user;
    /**
     * Handler for when icon is selected
     * @param e event
     */
    const handle = (auth: any = '') =>{
        console.log('trigered', auth);
        if (user) {
            user.icon = iconUser;
            storageService.set(Keys.USER, user);
        }
    }


    //For material-ui operation
    const [value, setValue] = useState('');
    const handleRadioChange = (event:any) => {
        setValue(event.target.value);
        console.log(value);
    };

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }),
    );

    const classes = useStyles();
    return <>
        <Grilla/>
        </>
}
