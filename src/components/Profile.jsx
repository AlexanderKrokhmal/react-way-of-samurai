import React from "react";
import './Profile.css'


function Profile() {
    return (
      <div className="content">
      <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
            alt="Background"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New posts
        </div>
        <div className="posts">
          <div className="item">
            post 1
          </div>
          <div className="item">
            post 24
          </div>
        </div>
      </div>
    </div>
    )
}


export default Profile;