import React from 'react';
import useStyles from '../style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid, Typography } from '@material-ui/core';
import {likeTweetRequest} from '../../../api/api_tweets'
import { useTweetState, setText, useTweetDispatch, likeTweet} from '../../../context/TweetContext';


const Tweet = (props) => {
    const classes = useStyles();
    const tweetDispatch = useTweetDispatch();
    
    const getImage =()=>{
        if (props.data.user.image) {
            return props.data.user.image
        }else{
            return "/images/user50.png";
        }
    }
const retweetBut = () =>{
    setText(tweetDispatch, props.data.text)
} 
const likeBut = () =>{
    
    likeTweetRequest(props.data._id,(isOk,data) =>{
        if(!isOk){
            return alert(data);
        }else{
            likeTweet(tweetDispatch,props.data._id);
        }
    });
}   
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img className={classes.newTweetProfileImg} src={getImage()} alt=""/>
                <Typography className={classes.tweetName}>{props.data.user.name}</Typography> 
                <Typography className={classes.tweetId}>{props.data.user._id}</Typography> 
            </Grid>
            <Grid container className={classes.tweetTextBox}>
                <Typography className={classes.tweetText}>{props.data.text}</Typography> 
                <div className={classes.imgPreViewTweet}>
                    <div className={classes.imgPreView} style={{backgroundImage : `url(${props.data.image})`}}></div>                   
                </div>
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Typography className={classes.likeCount}>{props.data.likes}{console.log(props.data.like)}</Typography> 
                <img onClick={retweetBut} className={classes.retweetLogo} src={"/images/retweet24.png"} alt="retweet"/>    
                <FavoriteIcon className={classes.likeIcon} onClick={likeBut} />
            </Grid>           
        </div>
    );
};

export default Tweet;