/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React, {useContext} from 'react';
import TweetListContext from './TweetListContext';
import Tweet from './Tweet';

export default function TweetsList() {

  const [tweetList, setTweetList] = useContext(TweetListContext);

  return (
    <div className='tweetListContainer'>
        {tweetList.map((tweet) => 
            <Tweet tweet={tweet} key={tweet.id} />
        )}
    </div>
  )
}