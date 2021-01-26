import React, { useEffect, useState } from 'react';
import Header from '../..//components/header/Header';
import { Divider } from '@material-ui/core';
import TweetList from '../home/components/TweetList';
import useStyles from '../home/style';
import axios from 'axios';

const TweetByHashtag = (props) => {
    const classes = useStyles();
    const [tweets,setTweets] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/tweets")
            .then(response=>{
                const data = response.data;
                setTweets(data);
            }).catch(error =>{
                console.log(error);
            })
    },[]);
    return (
        <div>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag25.png"} alt="hsh"/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetByHashtag;