/** PROFILE
 * ITC Full-Stack Bootcamp
 * React Micro Blogging assignment
 * 26/07/2022
 * Asaf Gilboa
*/

import React, {useState} from 'react';

export default function Profile(props) {

  const [profileName, setProfileName] = useState('');

  function saveClick() {
    if (profileName) {
      props.changeUserName(profileName);
    }
    setProfileName('');
  }
    
  return (
    <div>
        <div className="profileContainer">
            <div className="profileHeader">Profile</div>
            <div className="inputTitle">User Name</div>
            <input onChange={(e) => setProfileName(e.target.value)} value={profileName}
                   type="text" id="profileInput" placeholder={props.profileName}/>
            <div className="profileBtnWrap">
                <button onClick={saveClick} className="submitBtn profileBtn btn btn-primary">Save</button>
            </div>
        </div>
    </div>
  )
}