import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList videos={videos} onVideoClick={selectVideo} />
    </div>
  );
}

export default App;
