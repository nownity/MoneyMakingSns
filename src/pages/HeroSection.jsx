import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HeroImage from "../images/HeroBody.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100vh + 20px);
  background: url(${HeroImage}) no-repeat center center/cover;
  filter: blur(3px) grayscale(60%);
  z-index: 0;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
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
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  z-index: 2;
  opacity: 0.9;
  color: #ff2d95;

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
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef(null);

  // 스크롤 시 Hero 영역 보일 때만 배경 보이게
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section ref={sectionRef}>
      <Background $visible={visible} />
      <Overlay />
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
