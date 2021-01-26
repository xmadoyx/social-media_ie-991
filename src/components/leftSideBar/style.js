import { makeStyles } from "@material-ui/core";
import {useTheme} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : '#69C9D0',
        width : '20%',
        padding : '2rem 0rem 0rem 1rem',
        [theme.breakpoints.down("sm")]:{
            width : '35%',
            overflowY : 'auto',    
        },
        
        
    },
    profile : {
        padding : '0.7rem 0.5rem 0.7rem 1rem',
        backgroundColor : 'white',
        flex : 'wrap',
        borderRadius : 5,
        width : '95%' ,       
    },
    title_sugestedAcount : {
        marginTop : '10%',
        fontSize : '100%',
        [theme.breakpoints.down("sm")]:{
            fontSize : '80%',    
        },
    },
    gridName : {
        marginTop : '0.5rem',
        marginLeft : '0.75rem',
        width : 'max-content'
    },
    userName : {
        fontSize : '100%',
        flex : 1, 
        [theme.breakpoints.down("sm")]:{
            fontSize : '70%',    
        },

    },
    userId : {
        fontSize : '100%',
        color : '#808080',
        flex : 1, 
        [theme.breakpoints.down("sm")]:{
            fontSize : '70%',    
        },

    },
    sugAcount :{
        marginTop : '12%',
        padding : '10% 5% 0% 5%',
        marginRight : '0.5rem',
        backgroundColor : 'white',
        flex : 'wrap',
        borderRadius : 5,
        width : '95%'    
    },
    profileImg : {
        width : '20%',
        height : '20%',
        borderRadius : '45%'
    },

}));
export default useStyles;