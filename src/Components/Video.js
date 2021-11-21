import React, { useRef, useState } from 'react';

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';




// props received from app
const Video = ({ url, channel, description, song, likes, shares, messages }) => {

    const [playing, setPlaying] = useState(false);


    // Reference for playing and pausing video
    const videoRef = useRef(null);


    // Method for starting and pausing video when clicked
    const handleVideoPress = () => {
        // Check if video is already playing
        if (playing) {
            // Stop video
            videoRef.current.pause();
            setPlaying(false);
        } else {
            // Play video
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        <div className="video">
            {/* Video */}
            <video 
                className="video__player" loop ref={videoRef} onClick={handleVideoPress} src={url}
            ></video>

            {/* Video Footer */}
            <VideoFooter channel={channel} description={description} song={song} />

            {/* Side bar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    );
};



export default Video;
