import React from 'react';
import Header from './components/Header';  // Nhập component Header
import VideoPlayer from './components/VideoPlayer';  // Nhập component VideoPlayer
import Footer from './components/Footer';  // Nhập component Footer
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; /* Đảm bảo footer ở dưới cùng */
`;

const App = () => {
  return (
    <AppContainer>
      <Header />  {/* Hiển thị Header */}
      <MainContent>
        <VideoPlayer />  {/* Video nằm ngay dưới Header */}
        {/* Các nội dung chính khác của bạn */}
      </MainContent>
      <Footer />  {/* Hiển thị Footer */}
    </AppContainer>
  );
};

export default App;
