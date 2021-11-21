import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import './VideoSidebar.css';



// Props received from Video
const VideoSidebar = ({ likes, shares, messages }) => {


    const [liked, setLiked] = useState(false);



    return (
        <div className="videoSidebar">

            <div className="videoSidebar__button">
                {/* Favourite Icon - Heart is filled in when video is liked - empty when not liked */}
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
                )}

                {/* Number of Likes */}
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                {/* Message Icon */}
                <MessageIcon fontSize="large" />
                
                {/* Number of Messages */}
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                {/* Share Icon */}
                <ShareIcon fontSize="large" />

                {/* Number of Shares */}
                <p>{shares}</p>
            </div>
        </div>
    );
};



export default VideoSidebar;
