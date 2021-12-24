import React from 'react';

const VideoItem = ({video}) => (
        <li>
            <img 
                src="{video.snippet.thumbnails.medium.url}" 
                alt="video thumbnail" 
        />
        <div>
            <p>{props.video.snippet.title}</p>  
            <p>{props.video.snippet.channelTitle}</p> 

        </div>
    </li>;
);


export default VideoItem;