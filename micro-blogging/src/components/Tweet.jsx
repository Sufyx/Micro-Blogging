/**
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 24/07/2022
 * Asaf Gilboa
*/

import React, {useEffect, useState} from 'react';

export default function Tweet(props) {
  return (
    <div className='tweetContainer'>
        <div className="tweetHead">
            <span className="userName">{props.tweet.userName}</span>
            <span className="tweetDate">{`${props.tweet.date}`}</span>
        </div>
        <div className="tweetContent">{props.tweet.content}</div>
    </div>
  )
}
