import React from 'react';
import Tweet from './Tweet';

const TweetList = (props) => {
    return (
        <div>
            {props.data.map(item => <Tweet key={item._id} data={item}/>)}
            
        </div>
    );
};

export default TweetList;