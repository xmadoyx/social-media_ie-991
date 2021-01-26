import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flex : 1,
        backgroundColor : '#e6e6e6',
        overflowY : 'auto',
        
    },
    header :{
        display : 'flex',
        padding : 18,
        backgroundColor : 'white'
    },
    headerTitle : {
        marginLeft : 10,
        marginRight: 10,
        fontWeight : 600
    },
    divider :{
        backgroundColor : '#1DA1F2',
        filter : 'opacity(0.75)',        
    },
    newTwitt : {
        display : 'flex',
        padding : 18,
        backgroundColor : 'white',
        flexDirection : 'column',
    },
    input : {
        marginLeft : '1.5rem',
        border : 'none',
        paddingBottom : '15%',
        flex : 1
    },
    twtBut : {
        marginTop : '5%',
        minHeight :'30px',
        height : '30px',
        borderRadius : '10%', 
    },
    imgIcon : {
        border : '0.5px solid black',
        fontSize : '1.8rem',
        marginTop : '5%',
        marginRight : '0.5rem',        
    },
    tweetItem : {
        display : 'flex',
        padding : 18,
        backgroundColor : 'white',
        flexDirection : 'column',
        marginTop : '7px',
    },
    tweetName : {
        fontSize : '140%',
        fontWeight : 600,
        margin : '0.5rem 0rem 0rem 1rem', 
        [theme.breakpoints.down("sm")]:{
            fontSize: '85%',
            margin : '5% 0% 0% 10%',    
        }, 

    },
    tweetId :{
        color : '#808080',
        fontSize : '0.9rem',
        margin : '12px 0px 0px 10px',
        [theme.breakpoints.down("sm")]:{
            fontSize: '85%',
            margin : '5% 0% 0% 4%',    
        }, 
    },
    tweetTextBox : {
        padding : '15px 0 15px 25px',        
    },
    tweetText :{
        fontSize : '1.1rem',
        fontWeight : 500
    },
    likeCount : {
        marginTop : 15,
        marginRight : 15,
        fontSize : '0.9rem'
    },
    retweetLogo : {
        marginTop : 15,
        marginRight : 15
    },
    likeIcon : {
        color : 'red',
        marginTop : 15,
        marginRight : 15
    },
    imgPreView : {
        width : '100%',
        height : '5rem',
        WebkitBackgroundSize : 'contain',
        backgroundRepeat : 'no-repeat'
    },
    imgPreViewTweet : {
        width : '5rem',
        height : '5rem',
        WebkitBackgroundSize : 'contain',
        backgroundRepeat : 'no-repeat',
        marginLeft : '50%'
    },
    newTweetProfileImg :{
        width : '10%',
        height : '10%',
        borderRadius : '45%',
        [theme.breakpoints.down("sm")]:{
            width : '15%',
            height : '15%',    
        },

    }
    
 
}));
export default useStyles;