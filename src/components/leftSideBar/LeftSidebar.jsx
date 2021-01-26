import React, { useEffect, useRef, useState } from 'react';
import useStyles from './style';
import { ButtonBase, Divider, Grid, Typography, Menu, MenuItem } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import {uploadUserPhoto} from '../../api/api-auth'
import { getUsers } from '../../api/api_tweets';



const LeftSidebar = () => {
    const classes = useStyles();
    const location = useLocation();
    const [acountData,setAcountData] = useState([]);
    const [anchorMenu,setAnchorMenu] = useState();
    const [imageFile,setImgFile] = useState();
    const [imagePath,setImgPath] = useState();
    const inputRef = useRef();
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/acountData")
    //         .then(response=>{
    //             const data = response.data;
    //             setAcountData(data);
    //         }).catch(error =>{
    //             console.log(error);
    //         })
    // },[]);
    useEffect(()=>{
        getUsers((isOk,data)=>{
            if (!isOk) {
                return alert("can not get users!")
            }else{
                setAcountData(data);
            }
        })

    },[location]);  
    var suggested_user_num = [1, 5, 10, 15];  
    const handleExitMenu = (e)=>{
        if (anchorMenu) {
            setAnchorMenu(null);
        }else
            setAnchorMenu(e.currentTarget)
    }
    const getImage =()=>{
        if(imagePath){
            return imagePath;
        }
        if (localStorage.getItem("image")) {
            return localStorage.getItem("image");
        }
        // if (localStorage.getItem("image") === "undefined"){
        //     console.log(localStorage.getItem("image"));
        //     return "/images/Octocat55.png";            
        // }
        // else return localStorage.getItem("image");    
    }
     const changProfile = (e)=>{
        console.log(e);
        if (e.target.files && e.target.files.length > 0){
             setImgFile(e.target.files[0]);
             const reader = new FileReader();
             reader.onload = (e) =>{
             setImgPath(e.target.result);
         }
         reader.readAsDataURL(e.target.files[0])
         }
         const formData = new FormData();
         formData.append("image", e.target.files[0]);
         uploadUserPhoto(formData, (isOk, data) => {
             if (!isOk) {
                 alert(data);
                 console.log(data);
             }else{
                 alert("photo uploaded");
             }localStorage.setItem("image",data.imagePath);
         })
         
     }
     var n;
    return (
        <div className={classes.root}>
           <Grid container className={classes.profile} onClick={handleExitMenu} >
                <img className={classes.profileImg} src={getImage()} alt=""/>
                <Grid container direction="column"  className={classes.gridName}>
                <Typography className={classes.userName}>{localStorage.getItem("name")}</Typography>
                <Typography className={classes.userId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <input ref={inputRef} type={'file'} style={{display : 'none'}} onChange={changProfile}/>
           </Grid>
           <Typography className={classes.title_sugestedAcount}>Suggested Accounts</Typography>
           <Grid className={classes.sugAcount} item container direction="column">
               
                {n = suggested_user_num[Math.floor(Math.random() * suggested_user_num.length)]}
                {acountData.slice(n,n+5).map(item =>{
                    return(<React.Fragment> 
                        <SuggestedAcount name={item.name} username={item.username} img={item.image} id={item._id}/>
                        <Divider style ={{marginTop : '15px'}}/>
                        </React.Fragment>);
                    })
                }  
           </Grid>
           <Menu open={Boolean(anchorMenu)} onClose={()=> setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={()=>{inputRef.current.click()}}>Profile Picture</MenuItem>
                <MenuItem onClick={()=>{localStorage.clear();window.location.reload();}}>Log Out</MenuItem>
           </Menu>
        </div>
    );
};
export default LeftSidebar;

const SuggestedAcount = (props) => {
    const classes = useStyles();
    const getImage = () =>{
        if (props.img) {
            return props.img;
        }else{
            return "/images/user50.png";
        }
    }
    return (
        <Link to={"/tweetbyuser/"+props.id + "/" + props.name} style={{width : '100%'}}>
        <ButtonBase style={{width : '100%'}}>
            <Grid container style={{marginTop : '5%'}}>
                <img className={classes.profileImg} src={getImage(props)} alt=""/>
                <Grid container direction="column"  className={classes.gridName}>
                <Typography className={classes.userName}>{props.name}</Typography>
                <Typography className={classes.userId}>{props.username}</Typography>
                </Grid>
           </Grid>
        </ButtonBase> 
        </Link>      
    );
};
