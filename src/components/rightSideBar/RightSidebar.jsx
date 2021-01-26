import { ButtonBase, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';
import {getHashTags} from '../../api/api_tweets'



const RightSidebar = () => {
    const classes = useStyles();
    const [hashtags,setHashtags] = useState([]);
    useEffect(()=>{
        getHashTags((isOk,data)=>{
            if(!isOk){
                return alert("can not get hash tags");
            }else{
                setHashtags(data);
            }
        })
        // axios.get("http://localhost:8000/hashtags")
        //     .then(response=>{
        //         const data = response.data;
        //         setHashtags(data);
        //     }).catch(error =>{
        //         console.log(error);
        //     })
    },[]);

    
    return (
        
        <div className={classes.root}>
            <Link to={"/"}>
            <Grid container direction={"row"}>
                <Grid className={classes.twitterLogo} item>
                <img src={"/images/twitter-logo-1.png"} alt=""/>                
                </Grid>
                <Grid item>
                <Typography className={classes.logoType}>Twitter</Typography>
                </Grid>                
            </Grid>
            </Link>
            
            <Typography className={classes.hashtagTitle}>Top 10 trends hashtags</Typography>  
            
            {hashtags.slice(0,10).map(item => // silce limit number of #
            <Link key={item._id} to={"/hashtags/"+ item.text}>
            <ButtonBase  className={classes.hashtagBase}>
                <Grid container direction={"column"} >
                    <Grid container item>
                    <img src={"/images/hashtag25.png"} alt="hsh"/>
                    <Typography className={classes.hashtag}>{item.text}</Typography>
                    </Grid>
                </Grid>
                </ButtonBase>
            </Link>                
            )}                
            
            {/* <ButtonBase className={classes.hashtagBase}>
            <Grid container direction={"column"} >
                <Grid container item>
                    <img src={"/images/hashtag25.png"} alt="hsh"/>
                    <Typography className={classes.hashtag}>first hdo sfdoodof </Typography>
                </Grid>
            </Grid>
            </ButtonBase>
            <ButtonBase className={classes.hashtagBase}>
            <Grid container direction={"column"} >
                <Grid container item>
                    <img src={"/images/hashtag25.png"} alt="hsh"/>
                    <Typography className={classes.hashtag}>first hast dfdsf ddsdfsdisdo  </Typography>
                </Grid>
            </Grid>
            </ButtonBase> */}
               
            </div>
    );
};

export default RightSidebar;