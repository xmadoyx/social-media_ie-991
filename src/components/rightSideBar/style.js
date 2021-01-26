import {makeStyles} from '@material-ui/styles';
import {useTheme} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{     
        backgroundColor : 'white',
        width : '20%',
        // textAlign : 'center',
        padding : '2rem 0rem 0rem 1rem', 
        marginLeft : 15,
        [theme.breakpoints.down("sm")]:{
            width : '100%',
            margin : 0,
        }
    },
    logoType :{
        fontSize : '1.4rem',
        fontWeight : 500,
        marginLeft : '1rem',
        fontFamily : '-apple-system',
        color: '#1DA1F2',
    },
    twitterLogo : {
        marginLeft : '5px',
    },
    hashtagTitle : {
        marginTop : 40,
        marginBottom : 20,
        fontSize : '1.2rem',
        fontWeight : 700,
        marginLeft : '1rem',
    },
    hashtagBase :{
        marginBottom : '0.5rem',
        width : '100%'
    },
    hashtag : {
        marginLeft : 10,
    }
}));
export default useStyles;