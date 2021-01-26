import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Typography, useTheme, useMediaQuery } from '@material-ui/core';
import useStyles from '../style';
import MenuIcon from '@material-ui/icons/Menu';
import { setToggelDrawer, useTweetDispatch} from '../../../context/TweetContext';

const Header = () => {
    const theme = useTheme();
    const classes = useStyles();
    const tweetDispatch = useTweetDispatch();
    const tabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={classes.header}>
            <HomeIcon/>
            <Typography className={classes.headerTitle}>Home</Typography>
            {tabletSize && <MenuIcon onClick={() => setToggelDrawer(tweetDispatch)}/> }
        </div>
    );
};

export default Header;