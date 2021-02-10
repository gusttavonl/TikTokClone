import React from 'react';
import './App.css';
import Video from './component/Video/Video';



function App() {
  return (
    // onde ficam os chats
    <div className="App">
       {/* Container Scroll dos videos */}
       <div className="appVideos">
        <Video />
        <Video />
       </div>
    </div>
  );
}
 
export default App;
