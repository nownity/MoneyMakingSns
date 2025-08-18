import { useState, useEffect } from "react";
import styled from "styled-components";
import HeroImage from "../images/HeroBody.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${HeroImage}) no-repeat center center/cover;
  position: relative;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }

  @media (max-width: 767px) {
    background-position: center ${({ $offset }) => $offset}px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(4px) grayscale(100%);
    /* filter: blur(4px); */
    z-index: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  z-index: 2;
  line-height: 1.4;
  span {
    display: block;
  }
  col {
    color: #ff2d95;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  z-index: 2;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 50px;
  border: 1.5px solid white;
  background: transparent;
  color: #fafafa;
  opacity: 0.9;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff2d95;
    border-color: #ff2d95;
  }
`;

const HeroSection = ({ currentSection, sectionRefs, lang }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 속도를 0.5로 줄여서 고정된 듯한 느낌
      setOffset(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section $offset={offset}>
      <Title>
        <span>LanguageExchangeKorea</span>
        <span>
          {lang === "ko"
            ? "글로벌 한국 로컬 라이프"
            : "Global Korean Local Life"}
        </span>
      </Title>
      <SubTitle>"Enjoy Korea Like a Local, Connect Like a Pro"</SubTitle>
      <Button
        onClick={() => scrollToSection("about")}
        $active={currentSection === "about"}
      >
        {lang === "ko" ? "알아보기" : "Learn More"}
      </Button>
    </Section>
  );
};

export default HeroSection;
