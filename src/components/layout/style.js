
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
    divider :{
        width : '0.1rem',
        height : '100%',
        backgroundColor : '#1DA1F2',
        filter : 'opacity(0.5)'
    },
});
export default useStyles;