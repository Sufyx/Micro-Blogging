/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CreateTweet from './components/CreateTweet';
import TweetsList from './components/TweetsList';
// import NavBar from './components/NavBar';


function App() {

  const [tweetList, setTweetList] = useState([]);
  const [loaderToggle, setLoaderToggle] = useState('none');


  useEffect(() => {
    fetchTweets();
  }, []);

  async function fetchTweets() {
    loading(true);
    const tweetsFromServer = await axios.get(
      'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet');
    setTweetList(tweetsFromServer.data.tweets);
    loading(false);
  }


  function loading(on) {
    on ? setLoaderToggle('initial') : setLoaderToggle('none');
  }

  return (
    <div className="main">
      <div className="feed">
        <CreateTweet fetchTweets={fetchTweets} loading={loading} />
        <div className="spinner-grow text-info m-auto mt-5 loader" style={{display:loaderToggle}} role="status"></div>
        <TweetsList tweetList={tweetList} />
      </div>
    </div>
  );
}

export default App;
