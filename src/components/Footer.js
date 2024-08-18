import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4px solid #f4b400; /* Dòng viền để tạo điểm nhấn */
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#home">HeHe</FooterLink>
        <FooterLink href="#services">Services</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
        <FooterLink href="#about">About</FooterLink>
      </FooterLinks>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
