import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   container : {
       backgroundColor : 'white'
   },
   welcome : {
       textAlign : 'center',
       marginBottom : '3rem',
       marginTop : '3rem',
       fontWeight : 600,
       fontSize : '1rem'
   },
   login_tab : {
       padding : '2rem 0 1rem 2rem',  
       
       flexDirection : 'column'

   },
   reg_tab : {
        padding : '2rem 0 1rem 1rem',   
        
        flexDirection : 'column'
   },
   login_but :{
       
   },
   input : {
       marginBottom : '1rem'
   }
});
export default useStyles;