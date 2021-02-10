import { MusicNote } from '@material-ui/icons';
import React from 'react';
import Ticker from 'react-ticker';
import './VideoFooter.css';



function VideoFooter({profile, description, music}) {
  return (
  
    <div className="videoFooter">
       <div className="videoFooterText">
          <h3>{profile}</h3> 
          <p>{description}</p>
          <div className="videoFooterMusic">
             <MusicNote className="videoFooterIcon"/>
             {/* texto que fica passando */}
             <div className="videoFooterTicker">
                <Ticker mode="smooth">
                    {({index}) => (
                    
                        <p>{music}</p>
                    
                    )}
                </Ticker>

             </div>
           
          </div>
      
       </div>
    </div>
  );
}
 
export default VideoFooter;
