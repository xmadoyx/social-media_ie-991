import React, { useEffect, useState } from 'react';
import useStyles from './style';
import Header from './components/Header';
import { Divider } from '@material-ui/core';
import NewTwitt from './components/NewTwitt';
import TweetList from './components/TweetList';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import {getAllTweets} from '../../api/api_tweets';
import {useLocation, Redirect} from 'react-router-dom';
import { useTweetState, setTweetList, useTweetDispatch  } from '../../context/TweetContext';
import {getTweetsByUserRequest} from '../../api/api_tweets';
import TweetByUser from '../tweetsByUser/TweetByUser';


//const tweets = [
    // {   sender : {
    //         name : "netflix",
    //         id : "@netflix",
    //         img : "/images/netflix50.png"
    //     },
    //     text : "this is my tweet" ,
    //     like : 5        
    // },
    // {   sender : {
    //         name : "instagram",
    //         id : "@instagram",
    //         img : "/images/instagram50.png"
    //     },
    //     text : "this is my tweet",
    //     like : 5    
    // },
    // {   sender : {
    //     name : "github",
    //     id : "@github",
    //     img : "/images/Octocat55.png"
    // },
    //     text : "this is my tweet" ,
    //     like : 14        
    // },
    // {   sender : {
    //     name : "microsoft",
    //     id : "@microsoft",
    //     img : "/images/microsoft50.png"
    // },
    // text : "this is my tweet",
    // like : 74     
    // },
//]

const Home = (props) => {
    const classes = useStyles();
    const tweetDispatch = useTweetDispatch();
    const location = useLocation();
    const {tweetList : tweets} = useTweetState();
    const [searchedUser,setsearchedUser] = useState();

    
    //const [tweets,setTweets] = useState([]); //state local for tweets
    
    useEffect(()=>{
        getAllTweets((isOk, data) => {
            if (!isOk) {
                return alert("not successful");
            }
            setTweetList(tweetDispatch, data);
        })
        // axios.get("http://localhost:8000/tweets")
        //     .then(response=>{
        //         const data = response.data;
        //         console.log(response);
        //         setTweets(data);
        //     }).catch(error =>{
        //         console.log(error);
        //     })
    },[location]);

    const itsChang = (e) =>{
        setsearchedUser(e.target.value);
    }
    const searchBut = () =>{

        tweets.map(item => {
            //console.log(item.user.username);
        if (item.user.username === searchedUser) {
            console.log(searchedUser);
            console.log(item._id);
            <Link to={"/tweetbyuser/"+props.id + "/" + props.name} style={{width : '100%'}}>link</Link>
        }
        });   
        
    // getTweetsByUserRequest(props.match.params.id ,(isOk,data)=>{
    //     if (!isOk) {
    //         return alert(data);
    //     }else{
    //         setTweetList(tweetDispatch, data);
    //     }
    // });
    }
    
    return (
        <div className={classes.root}>
            <Header title={"Home"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <div style={{backgroundColor : 'white'}}>
                <input type="text" placeholder="Search ..." onChange={itsChang}/>
                <button onClick={searchBut}>Search</button>
                <p>{searchedUser}</p>
            </div>
            <NewTwitt/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default Home;