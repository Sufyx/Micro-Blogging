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
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [tweetList, setTweetList] = useState([]);
  const [loaderToggle, setLoaderToggle] = useState('none');
  const [profileName, setProfileName] = useState("User");

  const homePage =      
    <div className="feed">
      <CreateTweet profileName={profileName} fetchTweets={fetchTweets} loading={loading} />
      <div className="spinner-grow text-info m-auto mt-5 loader" style={{display:loaderToggle}} role="status"></div>
      <TweetsList tweetList={tweetList} />
    </div>;
  const profilePage = <Profile changeUserName={changeUserName} profileName={profileName}/>
  const [page, setPage] = useState("home");


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

  function navClick(toPage) {
    if (toPage === "home") {
      fetchTweets();
    }
    setPage(toPage);
  }


  function changeUserName(newName) {
    setProfileName(newName);
  }



  return (
    <div className="main">
      <BrowserRouter>
        <NavBar navClick={navClick} />
        <Routes>
          <Route path="/"  element={homePage}/>
          <Route path="/profile"  element={profilePage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
