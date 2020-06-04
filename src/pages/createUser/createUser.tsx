import React, {FunctionComponent, useEffect, useState} from 'react';
import {User} from "../../models/user";
import {StorageService} from "../../services/save.local.storage";
import {Keys} from "../../enums";
//Imports of material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const CreateUserPage = (props: any)=>{

    const [iconUser, setIconUser] = useState('');
    const storageService = new StorageService();
    let user = User;
    user = props.user;
    /**
     * Handler for when icon is selected
     * @param e event
     */
    const handle = (e:any) =>{
        user.icon = iconUser;
        storageService.set(Keys.USER, user);
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
        <form>
            <RadioGroup value={value} onChange={handleRadioChange}>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <label>
                                        <input type="radio" name="test" value="autorA" checked className="radio" ></input>
                                        <img className="radioImage" src="http://placehold.it/40x60/0bf/fff&text=A"></img>
                                    </label>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <label>
                                        <input type="radio" name="test" value="autorB" checked className="radio"></input>
                                        <img className="radioImage" src="http://placehold.it/40x60/0bf/fff&text=A"></img>
                                    </label>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <FormControlLabel value="best3" control={<Radio />} label={
                                        <figure>
                                        <img src ="https://cdn.icon-icons.com/icons2/1286/PNG/512/59_85246.png" width="50"
                                             height="50"/>
                                             <figcaption>Nombre del autor</figcaption>
                                        </figure>
                                     }/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>d</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>e</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>f</Paper>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>a</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>b</Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </RadioGroup>

        </form>
        </>
}