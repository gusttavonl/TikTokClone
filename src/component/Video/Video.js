import React, { useRef, useState } from 'react';
import './Video.css';
import videoTikTok1 from './tiktokvideoromantico.mp4'
import videoTikTok2 from './tiktokvideotherock.mp4'
import VideoFooter from './VideoFooter/VideoFooter';
import Sidebar from '../Sidebar/Sidebar';


function Video() {
    const [play, setPlay] = useState(false) /* video começa como false (pausado) */
    const videoRef = useRef(null); /* videeo começa o refresh como null */
    
    const handleVideoRef = () => {
        if(play){ /* se o video estiver tocando */
            videoRef.current.pause(); /* acesso a videoRef valor e pauso o video */
            setPlay(false)
        }else{/* se o video nao estiver tocando eu dou um play nele */
            videoRef.current.play();
            setPlay(true)
        }
    }
    
    return (
        // onde ficam os chats
        <div className="video">
            {/* Container Scroll dos videos */}
            {/* refresh do video setado na const videoRef */}
            {/*No onClick entao eu controlo se meu video deve pausar ou dar play setando a opção pra var videoRef */}
            <video className="videoPlayer" onClick={handleVideoRef} ref={videoRef} loop src={videoTikTok2}></video>
            <VideoFooter profile={"@gustavonoronha"} description={"Video do The Rock, motivação para a academia"} music={"Show Out - Kid Cudi & Skepta"}/>
            <Sidebar likes={400} coments={50} shares={200}  />
        </div>
    );
}

export default Video;
