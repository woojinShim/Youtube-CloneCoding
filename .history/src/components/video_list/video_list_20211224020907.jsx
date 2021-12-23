import React from 'react';

const VideoList = (props) => (
        <ul>
            {props.videos.map(video => ( 
                <VideoItem key={video.id} video={video} />
            ))}
        </ul>
    );

export default VideoList;