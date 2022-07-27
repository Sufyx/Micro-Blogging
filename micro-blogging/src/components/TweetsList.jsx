/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React from 'react';
import Tweet from './Tweet';

export default function TweetsList(props) {

  return (
    <div className='tweetListContainer'>
        {props.tweetList.map((tweet) => 
            <Tweet tweet={tweet} key={tweet.id} />
        )}
    </div>
  )
}
