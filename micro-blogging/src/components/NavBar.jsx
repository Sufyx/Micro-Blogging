/** NAVBAR
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 26/07/2022
 * Asaf Gilboa
*/

import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export default function NavBar(props) {

    const [homeNav, setHomeNav] = useState('rgb(255, 255, 255)');
    const [profileNav, setProfileNav] = useState('rgba(255, 255, 255, 0.5)');


    function handleClick(page) {
        props.navClick(page);
        if (page === "home") {
            setHomeNav('rgb(255, 255, 255)');
            setProfileNav('rgba(255, 255, 255, 0.5)');
        } else {
            setHomeNav('rgb(255, 255, 255, 0.5)');
            setProfileNav('rgba(255, 255, 255)');
        }
    }

  return (
    <div className="navBar">
        <Link to="/" className="navItem">
            <span onClick={e=> handleClick("home")} style={{color: homeNav}} >Home</span>
        </Link>
        <Link to="/profile" className="navItem">
            <span onClick={e=> handleClick("profile")} style={{color: profileNav}} >Profile</span>
        </Link>
    </div>
  )
}
