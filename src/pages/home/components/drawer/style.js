import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    root:{
        display : 'flex',
        height : '100vh',
        width : '100%',
        overflow : 'hidden',  //side bar roo taghie mide vase kol shafhe
        
    },
    content :{
        flex : 1,
        overflowY : 'auto'

    },
    paper: {
        background: "#ebebeb",
        width : '55%'
      }
});
export default useStyles;