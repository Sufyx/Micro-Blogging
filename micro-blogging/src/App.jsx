/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import './App.css';
import React, {useEffect, useState} from 'react';
import CreateTweet from './components/CreateTweet';
import TweetsList from './components/TweetsList';




function App() {

  const [tweetList, setFTweetList] = useState(
    localStorage.getItem('tweetList') !== null ? 
    JSON.parse(localStorage.getItem('tweetList')) : []); 

  useEffect(() => {
    localStorage.setItem('tweetList', JSON.stringify(tweetList));
  }, [tweetList]);

  function addTweet(tweet) {
    setFTweetList(tweetList => [tweet, ...tweetList]);
  }



  return (
    <div className="main">
      <div className="feed">
        <CreateTweet addTweet={addTweet}/>
        <TweetsList tweetList={tweetList} />
      </div>
    </div>
  );
}

export default App;
