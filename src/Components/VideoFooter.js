import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker';

import './VideoFooter.css';




// Props received from Video
const VideoFooter = ({ channel, description, song }) => {


    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                {/* Channel Name */}
                <h3>@{channel}</h3>

                {/* Description */}
                <p>{description}</p>

                <div className="videoFooter__ticker">
                    {/* Music Note Icon */}
                    <MusicNoteIcon className="videoFooter__icon" />

                    {/* Ticker */}
                    <Ticker mode="smooth">
                        {({index}) => (<p>{song}</p>)}
                    </Ticker>
                </div>
            </div>

            {/* Image of Record */}
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    );
};

export default VideoFooter;
