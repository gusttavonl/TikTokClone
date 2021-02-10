import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';
import React, { useState } from 'react';
import './Sidebar.css';



function Sidebar({likes, shares, coments}) {
  const [liked, setLiked] = useState(false)
  return (
     <div className="sidebar">
        <div className="sidebarIcon">
          {liked ? (
            <Favorite fontSize="large" onClick={(e) => setLiked(false)} />
          ): (
            <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        
        </div>
        <div className="sidebarIcon">
          <Message fontSize="large" />
          <p>{coments}</p>
        </div>
        <div className="sidebarIcon">
          <Share fontSize="large"/>
          <p>{shares}</p>
        </div>
    </div>
  );
}
 
export default Sidebar;
