import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 500px;
  background: url('/hero-background.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CTAButton = styled.a`
  padding: 15px 30px;
  background: #00bfae;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>Grab Your Ride Now</Title>
      <Description>Fast and reliable transportation at your fingertips</Description>
      <CTAButton href="#download">Download Now</CTAButton>
    </HeroContainer>
  );
};

export default HeroSection;
