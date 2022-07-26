/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

export default function CreateTweet(props) {

  const [formText, setFormText] = useState('');
  const [formBtn, setFormBtn] = useState(false);
  const [formMessage, setFormMessage] = useState('');


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
    const userName = "Ash Ketchum";
    const newTweet = {content: formText, userName: userName, date: new Date().toISOString(), id:uuid()};

    setFormBtn(true);
    props.loading(true);
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
    props.fetchTweets();
    setFormText('');
    props.loading(false);
    setFormBtn(false);
  }


  return (
    <div className="createTweetForm">
        <textarea onChange={(e) => setFormText(e.target.value)}
         id="createTweetInput" placeholder="What do you have in mind..." value={formText}></textarea>
        <div className="formBottomBar">
            <span className="formMessage">{formMessage}</span>
            <button onClick={publishClick} disabled={formBtn} className="btn btn-primary" id="sendTweetBtn">
                Tweet
            </button>
        </div>
    </div>
  )
}
