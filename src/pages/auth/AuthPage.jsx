import { Button, Input, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './style';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import axios from 'axios';


const LOGIN_TAB_VAL = 1;
const REG_TAB_VAL = 2;

const AuthPage = () => {
    const classes = useStyles();
    const [tab,setTab] = useState(LOGIN_TAB_VAL);
    //login state
    const [usernamelogin,setUsernamelogin] = useState();
    const [passwordlogin,setPasswordlogin] = useState();
     //register state
    const [usernameregister,setUserNameRegister] = useState();
    const [passwordregister,setPasswordRegister] = useState();
    const [profileregister,setProfileRegister] = useState();
    const [cnfpasswordregister,setCnfPasswordRegister] = useState();

    const validatLogin =(user)=>{                 // login validation
        if (!user.username) {
            return "please enter the username!"
        }
        if (!user.password) {
            return "please enter the password!"
        }
    }
    const handleLogin = ()=>{
        const user = {
            username : usernamelogin,
            password : passwordlogin
        }
        const error = validatLogin(user);
        if (error) {
            return alert(error);
        }
        axios.post("https://twitterapi.liara.run/api/login",user)
            .then(res=>{
                const data = res.data;
                alert("you logged in");
                console.log(data);
                localStorage.setItem("name",data.name);
                localStorage.setItem("username",data.username);
                localStorage.setItem("image",data.image);
                localStorage.setItem("x_auth_token",data["x-auth-token"]);
                window.location.reload();

            }).catch(err=>{
                console.log(err);
            })
    }
    const validatRegister =(user)=>{                       // register validation
        if (!user.username) {
            return "please enter the username!"
        }
        if (!user.name) {
            return "please enter the name!"
        }
        if (!user.password) {
            return "please enter the password!"
        }
        if (user.confPassworRegister !== user.password) {
            return "passwords are not the same!"
        }
    }
    const handleRegister = () =>{
        const user = {
            name : usernameregister,
            username : profileregister,
            password : passwordregister,
            confPassworRegister : cnfpasswordregister
        }
        const error = validatRegister(user);
        if (error) {
            return alert(error);
        }
        user.confPassworRegister = undefined;
        axios.post("https://twitterapi.liara.run/api/register",user)
            .then(res=>{
                const data = res.data;
                alert("you are registered in");
                console.log(data);
                localStorage.setItem("name",data.name);
                localStorage.setItem("username",data.username);
                localStorage.setItem("image",data.image);
                localStorage.setItem("x_auth_token",data["x-auth-token"]);
                window.location.reload();

            }).catch(err=>{
                console.log(err.response.data.massage);
            })

    }
    const handleChange = (e, newValue)=>{
        setTab(newValue) ;
    }
    return (
        <Paper className={classes.container}>
            <Typography className={classes.welcome}>welcome to our Tweeter</Typography>
            <Tabs
            value={tab}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
            >
            <Tab  aria-label="phone" label="login" value={LOGIN_TAB_VAL} />
            <Tab  aria-label="favorite" label="register" value={REG_TAB_VAL}/>
            </Tabs>
            {tab === LOGIN_TAB_VAL &&
            <div className={classes.login_tab}>
                <Typography>UserName : </Typography>
                <Input value={usernamelogin} className={classes.input} onChange={e => setUsernamelogin(e.target.value)}></Input>
                <Typography>Password : </Typography>
                <Input value={passwordlogin} className={classes.input} onChange={e => setPasswordlogin(e.target.value)}></Input>
                <div><Button onClick={handleLogin} className={classes.login_but} variant="contained" color="secondary">Login</Button></div>
                

            </div>}
            {tab === REG_TAB_VAL &&
            <div className={classes.reg_tab}>
                <Typography>ProfileName : </Typography>
                <Input value={usernameregister} onChange={e => setUserNameRegister(e.target.value)} className={classes.input}></Input>
                <Typography>UserName : </Typography>
                <Input value={profileregister} onChange={e => setProfileRegister(e.target.value)} className={classes.input}></Input>
                <Typography>Password : </Typography>
                <Input value={passwordregister} onChange={e => setPasswordRegister(e.target.value)} className={classes.input}></Input>
                <Typography>Password-Again : </Typography>
                <Input value={cnfpasswordregister} onChange={e => setCnfPasswordRegister(e.target.value)} className={classes.input}></Input>              
                <div><Button onClick={handleRegister} className={classes.reg_but} variant="contained" color="secondary">register</Button></div>  
                
            </div>}
            
        </Paper>
    );
};

export default AuthPage;