import React, { useEffect, useState } from 'react';

import './App.css';
import Video from './Components/Video';
import axios from './axios';





function App() {


    const [videos, setVideos] = useState([]);


    // Get Data from Mongo DB when loaded
    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get('/v2/posts');
            // Store in state
            setVideos(response.data);
            return;
        }

        fetchPosts();
    }, []);

    console.log(videos);


    return (
        <div className="app">
            <div className="app__videos">
                {/* Videos - map through array of videos saved in state */}
                {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
                    <Video url={url} channel={channel} song={song} likes={likes} shares={shares} messages={messages} description={description} />
                ))}
            </div>
        </div>
    );
}


export default App;
