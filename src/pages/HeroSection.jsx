import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import heroImage from "../images/HeroBody.jpg";
import logoImage from "../images/LogoLEKw.png";
import useScrollFadeIn from "../hooks/useScrollFadIn";

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
  background: url(${heroImage}) no-repeat center center/cover;
  filter: blur(2px) grayscale(50%);
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
  z-index: 2;
  line-height: 1.4;

  span {
    display: block;
  }

  @media (min-width: 1500px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Logo = styled.img`
  height: 100px;
  object-fit: contain;
  z-index: 3;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-weight: bold;
  z-index: 2;
  opacity: 0.9;
  color: #ff2d95;

  @media (min-width: 1500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubTitle2 = styled.p`
  display: none;
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
  @media (min-width: 1500px) {
    font-size: 1.2rem;
  }
`;

const HeroSection = ({ currentSection, sectionRefs, lang }) => {
  const fadeIn1 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn2 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn3 = useScrollFadeIn("up", 0.8, 0.5);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef(null);

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
      <div style={{ display: "none" }} aria-hidden="true">
        <h1>Language Exchange Korea (랭귀지익스체인지코리아)</h1>
        <p>
          Language Exchange Korea는 외국인과 한국인이 함께 참여하는 언어 교환
          커뮤니티입니다. 서울과 부산에서 오프라인과 온라인 프로그램을 운영하며,
          언어와 문화를 교류하는 혁신적인 플랫폼입니다.
        </p>
      </div>
      <Background $visible={visible} />
      <Overlay />
      <Logo src={logoImage} alt="LEK Logo" {...fadeIn1} />
      <Title {...fadeIn1}>
        <span>
          {lang === "ko"
            ? "글로벌 한국 로컬 라이프"
            : "Global Korean Local Life"}
        </span>
      </Title>
      <SubTitle {...fadeIn2}>
        "Enjoy Korea Like a Local, Connect Like a Pro"
      </SubTitle>
      <SubTitle2>Language Exchange Korea</SubTitle2>
      <Button
        onClick={() => scrollToSection("about")}
        $active={currentSection === "about"}
        {...fadeIn3}
      >
        {lang === "ko" ? "알아보기" : "Learn More"}
      </Button>
    </Section>
  );
};

export default HeroSection;
