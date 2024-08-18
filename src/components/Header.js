import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './DropdownMenu';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px; /* Điều chỉnh kích thước logo nếu cần */
`;

const DropdownsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  margin-right: 15px; /* Thêm khoảng cách giữa các dropdown menu */
`;

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    // Thực hiện ẩn dropdown khi nhấp ra ngoài
    const handleClickOutside = (event) => {
      if (dropdownRefs.current && !dropdownRefs.current.some(ref => ref.contains(event.target))) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesItems = [
    { text: 'Web Development', link: '#web-development' },
    { text: 'App Development', link: '#app-development' },
    { text: 'SEO Services', link: '#seo-services' }
  ];

  const featuresItems = [
    { text: 'Feature 1', link: '#feature1' },
    { text: 'Feature 2', link: '#feature2' },
    { text: 'Feature 3', link: '#feature3' }
  ];

  const contactItems = [
    { text: 'Email Us', link: '#email' },
    { text: 'Call Us', link: '#call' },
    { text: 'Visit Us', link: '#visit' }
  ];

  return (
    <HeaderContainer>
      <Logo src="logo512.png" alt="Logo" /> {/* Thay đổi URL logo */}
      <DropdownsContainer>
        <DropdownWrapper ref={(el) => (dropdownRefs.current[0] = el)}>
          <DropdownMenu
            title="Services"
            items={servicesItems}
            show={openDropdown === 'services'}
            onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
          />
        </DropdownWrapper>
        <DropdownWrapper ref={(el) => (dropdownRefs.current[1] = el)}>
          <DropdownMenu
            title="Features"
            items={featuresItems}
            show={openDropdown === 'features'}
            onClick={() => setOpenDropdown(openDropdown === 'features' ? null : 'features')}
          />
        </DropdownWrapper>
        <DropdownWrapper ref={(el) => (dropdownRefs.current[2] = el)}>
          <DropdownMenu
            title="Contact"
            items={contactItems}
            show={openDropdown === 'contact'}
            onClick={() => setOpenDropdown(openDropdown === 'contact' ? null : 'contact')}
          />
        </DropdownWrapper>
      </DropdownsContainer>
    </HeaderContainer>
  );
};

export default Header;
