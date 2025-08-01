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

  /* PC에서는 고정 */
  @media (min-width: 1025px) {
    background-attachment: fixed;
  }

  /* 모바일에서는 JS offset 적용 */
  @media (max-width: 1024px) {
    background-position: center ${({ $offset }) => $offset}px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
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
  @media (max-width: 768px) {
    font-size: 2rem;
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
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #fafafa;
    color: #ff2d95;
    border-color: #fafafa;
  }
`;

const HeroSection = ({ lang }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 속도를 0.5로 줄여서 고정된 듯한 느낌
      setOffset(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section $offset={offset}>
      <Title>
        <span>{lang === "ko" ? "MMS와 함께하는" : "With MMS"}</span>
        <span>
          {lang === "ko"
            ? "글로벌 한국 로컬 라이프"
            : "Global Korean Local Life"}
        </span>
      </Title>
      <SubTitle>"Enjoy Korea Like a Local, Connect Like a Pro"</SubTitle>
      <Button>{lang === "ko" ? "알아보기" : "Learn More"}</Button>
    </Section>
  );
};

export default HeroSection;
