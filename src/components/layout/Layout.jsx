import { Divider, useMediaQuery, useTheme} from '@material-ui/core';
import React from 'react';
import TweetDrawer from '../../pages/home/components/drawer/TweetDrawer';
import LeftSidebar from '../leftSideBar/LeftSidebar';
import RightSidebar from '../rightSideBar/RightSidebar';
import useStyles from './style';



const Layout = (props) => {
    const theme = useTheme();
    const tabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <LeftSidebar/>          
            <Divider orientation={"vertical"} className={classes.divider}></Divider>
            <div className={classes.content}>
            {props.children}
            </div>            
            <Divider orientation={"vertical"} className={classes.divider}></Divider>
            {tabletSize? <TweetDrawer/> : <RightSidebar/>}   {/* size < 960 beshe RightSidebar remove mishe */}
        </div>
    );
};

export default Layout;