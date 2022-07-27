/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React, {useEffect, useState, useContext} from 'react';
import TweetListContext from './TweetListContext';
import uuid from 'react-uuid';
import axios from 'axios';

export default function CreateTweet() {

  const [formText, setFormText] = useState('');
  const [formBtn, setFormBtn] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [tweetList, setTweetList] = useContext(TweetListContext);


  useEffect(() => {
    if (formText.length > 140) {
        setFormBtn(true);
        setFormMessage("The tweet can't contain more than 140 characters.");
    } else {
        setFormBtn(false);
        setFormMessage("");
    }
  }, [formText]);

  
  async function publishClick() {
    if (formText === '') {
      console.log('Spam control');
      return;
    }
    const newTweet = {
      content: formText,
      userName: JSON.parse(localStorage.getItem('profileName')),
      date: new Date().toISOString(), id:uuid()
    };

    setFormBtn(true);
    const response = await axios.post(
      'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet',
      newTweet).catch(function (error) {
        if (error.response) {
          console.error("The request was made and the server responded with a status code");
          console.error("status: ", error.response.status);
          setFormMessage(error.response.data.message);
        } else if (error.request) {
          console.error("The request was made but no response was received");
          setFormMessage(error.request);
        } else {
          console.error('Something happened in setting up the request that triggered an error');
          setFormMessage(error.message);
        }
      });
    setFormText('');
    setFormBtn(false);
    const newList = [newTweet, ...tweetList];
    setTweetList(newList);
  }


  return (
    <div className="createTweetForm">
        <textarea onChange={(e) => setFormText(e.target.value)}
         id="createTweetInput" placeholder="What do you have in mind..." value={formText}></textarea>
        <div className="formBottomBar">
            <span className="formMessage">{formMessage}</span>
            <button onClick={publishClick} disabled={formBtn} className="submitBtn btn btn-primary">
                Tweet
            </button>
        </div>
    </div>
  )
}
