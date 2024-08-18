import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 50px;
  background: #f9f9f9;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FeatureItem = styled.div`
  text-align: center;
  max-width: 200px;
`;

const FeatureIcon = styled.img`
  height: 80px;
  margin-bottom: 20px;
`;

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <FeaturesTitle>Our Features</FeaturesTitle>
      <FeaturesList>
        <FeatureItem>
          <FeatureIcon src="/feature1.png" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>Description of feature 1.</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src="/feature2.png" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>Description of feature 2.</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src="/feature3.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </FeatureItem>
      </FeaturesList>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
