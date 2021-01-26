import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { Divider } from '@material-ui/core';
import TweetList from '../home/components/TweetList';
import useStyles from '../home/style';
import PersonIcon from '@material-ui/icons/Person';
import {getTweetsByUserRequest} from '../../api/api_tweets';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import { useTweetState, setTweetList, useTweetDispatch  } from '../../context/TweetContext';


const TweetByUser = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const tweetDispatch = useTweetDispatch();
    //const [tweets,setTweets] = useState([]); //local store of tweetlist
    const {tweetList : tweets} = useTweetState();
    console.log(props);
    useEffect(()=>{
        getTweetsByUserRequest(props.match.params.id ,(isOk,data)=>{
            if (!isOk) {
                return alert(data);
            }else{
                setTweetList(tweetDispatch, data);
            }
        });
        // axios.get("http://localhost:8000/tweets")
        //     .then(response=>{
        //         const data = response.data;
        //         setTweets(data);
        //     }).catch(error =>{
        //         console.log(error);
        //     })
    },[location]); // ba in car useEffect ro be location hassas mikonim va page refresh mishe
    return (
        <div>
            <Header title={props.match.params.name} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};
export default TweetByUser;