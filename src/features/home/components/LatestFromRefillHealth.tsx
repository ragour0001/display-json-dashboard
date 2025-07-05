import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Slider from 'react-slick';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface BlogPost {
  image: string;
  title: string;
  date: string;
  description: string;
}

const LatestSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  gap: 54px;
  background-color: #fff;
  margin-bottom: 64px;
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SectionTitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin: 0;
  letter-spacing: 0.5px;

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 36px;
    padding: 0 20px;
  }
`;

const TitlePrimary = styled.span`
  color: #212121;
`;

const TitleAccent = styled.span`
  color: #6c5ce7;
`;

const BlogCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 991px) {
    display: none !important;
  }
`;

const MobileSliderWrapper = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: flex !important;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    width: 100vw;
    padding: 0 12px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 8px;
      background: #eee;
    }

    &::-webkit-scrollbar-thumb {
      background: #cfc6f7;
      border-radius: 4px;
    }
  }
`;

const BlogCard = styled.article`
  width: 369px;
  height: 518px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(.25,.8,.25,1), box-shadow 0.35s;
  cursor: pointer;
  position: relative;
  background: #fff;

  &:hover {
    transform: translateY(-12px) scale(1.04) rotateZ(-1deg);
    box-shadow: 0 12px 32px rgba(108, 92, 231, 0.18), 0 2px 8px rgba(0,0,0,0.10);
    z-index: 2;
  }

  @media (max-width: 991px) {
    min-width: 280px;
    max-width: 320px;
    height: auto;
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    height: auto;
  }
`;

const BlogImage = styled.div<{ $backgroundImage: string }>`
  height: 293px;
  background-size: cover;
  background-position: center 20%;
  background-image: url(${props => props.$backgroundImage});
  border-radius: 20px 20px 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 200px;
  }
`;

const BlogContent = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 20px;
    gap: 12px;
  }
`;

const BlogTitle = styled.h2`
  color: #232323;
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  letter-spacing: 0.5px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const BlogDate = styled.time`
  color: #535353;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  display: block;
  margin-top: 4px;
`;

const BlogDescription = styled.p`
  color: #232323;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 1.5;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin: 0;
  margin-top: 8px;

  @media (max-width: 640px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;

const ReadMoreButton = styled(Link)`
  width: 253px;
  height: 63px;
  border-radius: 100px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  background-color: #6c5ce7;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 
    background 0.3s cubic-bezier(.25,.8,.25,1),
    color 0.3s cubic-bezier(.25,.8,.25,1),
    transform 0.25s cubic-bezier(.25,.8,.25,1),
    box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.10);

  &:hover {
    background: linear-gradient(90deg, #6c5ce7 60%, #a29bfe 100%);
    color: #fff;
    transform: translateY(-4px) scale(1.06);
    box-shadow: 0 8px 24px rgba(108, 92, 231, 0.18), 0 2px 8px rgba(0,0,0,0.10);
  }

  @media (max-width: 640px) {
    width: 200px;
    height: 50px;
    font-size: 18px;
  }
`;

const LatestFromRefillHealth: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      title: 'The Invisible Backpack: What Are You Carrying Emotionally?',
      date: 'May 12, 2025',
      description: 'Discover the unseen emotional weight we all carry — stress, memories, expectations — and how to gently release what no longer serves you.'
    },
    {
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
      title: 'Your Brain Is a Garden: What Are You Growing?',
      date: 'May 20, 2025',
      description: 'Every thought you feed shapes your inner world — are you nurturing growth or letting self-doubt take root?'
    },
    {
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2070&auto=format&fit=crop',
      title: 'The Soundtrack of Your Mental Health: What\'s Playing in Your Head?',
      date: 'May 21, 2025',
      description: 'Your thoughts are like background music — always playing, often unnoticed, but deeply powerful.'
    }
  ];

  const slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: false,
    speed: 400,
    adaptiveHeight: true
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderCard = (post: BlogPost, i: number) => (
    <BlogCard
      data-aos="zoom-in"
      data-aos-delay={i * 120}
      key={i}
    >
      <BlogImage $backgroundImage={post.image} />
      <BlogContent>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogDate>{post.date}</BlogDate>
        <BlogDescription>{post.description}</BlogDescription>
      </BlogContent>
    </BlogCard>
  );

  return (
    <LatestSection data-aos="fade-up">
      <SectionHeader>
        <SectionTitle>
          <TitlePrimary>Latest from</TitlePrimary>
          <TitleAccent> Refill Health</TitleAccent>
        </SectionTitle>
      </SectionHeader>

      <BlogCardsContainer>
        {blogPosts.map((post, i) => renderCard(post, i))}
      </BlogCardsContainer>

      {isMobile && (
        <MobileSliderWrapper>
          {blogPosts.map((post, i) => renderCard(post, i))}
        </MobileSliderWrapper>
      )}

      <ReadMoreButton to="/blog" data-aos="fade-up" data-aos-delay="400">
        Read More
      </ReadMoreButton>
    </LatestSection>
  );
};

export default LatestFromRefillHealth;
