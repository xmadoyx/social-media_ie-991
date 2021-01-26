import { Drawer } from '@material-ui/core';
import React from 'react';
import RightSidebar from '../../../../components/rightSideBar/RightSidebar';
import { useTweetState, setToggelDrawer, useTweetDispatch} from '../../../../context/TweetContext';
import useStyles from './style';

const TweetDrawer = () => {
    const {toggelDrawer} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    const classes = useStyles();

    return (
        <Drawer classes={{ paper: classes.paper }} anchor={'right'} open={toggelDrawer} onClose={()=>{setToggelDrawer(tweetDispatch)}}><RightSidebar/></Drawer>
    );
};

export default TweetDrawer;