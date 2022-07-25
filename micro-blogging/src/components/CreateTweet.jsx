/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React, {useEffect, useState} from 'react';

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


  function publishClick(e) {
    const userName = "Jack Dorsey";
    props.addTweet({content: formText, userName: userName, date: new Date()});
    setFormText('');
  }


  return (
    <div className="createTweetContainer">
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
