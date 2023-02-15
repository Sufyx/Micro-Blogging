/**
 * Micro Blogging
 * Asaf Gilboa
*/


import React, {useContext} from 'react';
import TweetListContext from '../context/TweetListContext';
import Tweet from './Tweet';


export default function TweetsList() {

  const {tweetList} = useContext(TweetListContext);


  return (
    <div className='tweetListContainer' >
        {tweetList.map((tweet) => 
            <Tweet tweet={tweet} key={tweet.id} />
        )}
    </div>
  )
}
