import { Button, Grid } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import useStyles from '../style';
import ImageIcon from '@material-ui/icons/Image';
import {newTweetRequest} from '../../../api/api_tweets'
import { useTweetState, setText, useTweetDispatch } from '../../../context/TweetContext';



const NewTwitt = () => {
    const inputFile = useRef();
    const [imageFile,setImgFile] = useState();
    const [imagePath,setImgPath] = useState();
    const {tweetText : text} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    //const [text, setText] = useState(""); //local new tweet text state 
    const textChang =(e)=>{
        setText(tweetDispatch, e.target.value);
    }
    const classes = useStyles();
    //const data ={
        //id : Math.random()*1000,
        // "sender" : {
        //     "name" : "netflix",
        //     "id" : "@netflix",
        //     "img" : "/images/netflix50.png"
        // },
        //"text" : text
        // "like" : 5
   // };
    const getImage =()=>{
        if (localStorage.getItem("image") && localStorage.getItem("image") !== "undefined") {
            return localStorage.getItem("image");
        }else{
            return "/images/profile55.png";
        }       
    }    
    const creatNewTweet = () =>{
       
        if(text === ""){  //tweet khali ro send nakon!
            return;
        }
        const formDate = new FormData();
        formDate.append("text",text);
        if (imageFile) {
            formDate.append("image",imageFile);
        }
        
        newTweetRequest(formDate, (isOk,data) =>{
            if (!isOk) {
                return alert(data);
            }
        })          
        setText(tweetDispatch,"");
    }
    const changProfile = (e)=>{
        console.log(e);
        if (e.target.files && e.target.files.length > 0){
             setImgFile(e.target.files[0]);
             const reader = new FileReader();
             reader.onload = (e) =>{
             setImgPath(e.target.result);
         };
         reader.readAsDataURL(e.target.files[0])
         }         
     }
    const selectImg = ()=>{
        inputFile.current.click();
    }
    return (
        
        <div className={classes.newTwitt}>
            <Grid container>
                <img className={classes.newTweetProfileImg} src={getImage()} alt=""/>
                <textarea value={text} onChange={textChang} placeholder={"tweet..."} className={classes.input}></textarea>
                <input ref={inputFile} type={'file'} style={{display : 'none'}} onChange={changProfile} />
                <div style={{width : '15%', height : '50%'}}>
                    <div className={classes.imgPreView} style={{backgroundImage : `url(${imagePath})`}}></div>                   
                </div>
                
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Button className={classes.twtBut} variant={'contained'} color={'primary'} onClick={creatNewTweet}>Tweet</Button>      
                <ImageIcon className={classes.imgIcon} onClick={selectImg}/> 
                    
            </Grid>
                     
        </div>
    );
};

export default NewTwitt;