
import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Điều chỉnh chiều cao của video */
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoSection = () => {
  return (
    <VideoContainer>
      <Video autoPlay muted loop>
        <source src="https://file-examples.com/storage/fe519944ff66ba53b99c446/2017/04/file_example_MP4_1920_18MG.mp4" type="video/mp4" /> {/* Thay đổi URL video */}
        Your browser does not support the video tag.
      </Video>
      <SearchBar />
    </VideoContainer>
  );
};

export default VideoSection;

