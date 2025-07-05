import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 871px;
  padding: 80px 117px 80px 150px;
  align-items: start;
  gap: 10px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  justify-content: start;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.article`
  position: relative;
  display: flex;
  min-width: 240px;
  width: 1173px;
  padding: 50px 0 50px 26px;
  align-items: center;
  gap: 40px 58px;
  justify-content: start;
  flex-wrap: wrap;
`;

const ContentSection = styled.section`
  align-self: stretch;
  min-width: 240px;
  margin: auto 0;
  flex: 1;
  width: 418px;
`;

const ContentArea = styled.div`
  width: 100%;
`;

const HillStation: React.FC = () => {
  return (
    <HeroSection>
      <BackgroundImage
        src="https://cdn.builder.io/api/v1/image/assets/8704d736b56e48e38f187f156a5944c4/ad6e7e8dd401ca7850ab933c3950310f6828c6f4?placeholderIfAbsent=true"
        alt="Hill Station Background"
      />
      <ContentWrapper>
        <ContentSection>
          <ContentArea />
        </ContentSection>
      </ContentWrapper>
    </HeroSection>
  );
};

export default HillStation; 