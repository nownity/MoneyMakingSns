import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "../pages/HeroSection";
import AboutSection from "../pages/AboutSection";
import SampleSection from "../pages/SampleSection";
import InfoSection from "../pages/InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContentsSection from "./ContentsSection";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
`;
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FixedButton = styled.a`
  position: fixed;
  left: 50%;
  bottom: calc(30px + env(safe-area-inset-bottom));
  transform: translateX(-50%)
    translateY(${({ $visible }) => ($visible ? "0" : "12px")});
  background: rgba(31, 31, 31, 0.75);
  color: #ff2d95;
  border: 1px solid #ff2d95;
  padding: 10px 28px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  z-index: 1000;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 220ms ease, transform 220ms ease, visibility 220ms ease;

  &:hover {
    background: linear-gradient(135deg, #ff2d95, #ff66b2);
    color: white;
  }
`;

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const showRecruitBtn = currentSection !== "hero";
  const [lang, setLang] = useState("ko");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const sampleRef = useRef(null);
  const infoRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    sample: sampleRef,
    info: infoRef,
    footer: footerRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    [heroRef, aboutRef, sampleRef, infoRef, footerRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Header
        currentSection={currentSection}
        sectionRefs={sectionRefs}
        lang={lang}
        setLang={setLang}
      />
      <MainWrapper>
        <section id="hero" ref={sectionRefs.hero}>
          <HeroSection
            currentSection={currentSection}
            sectionRefs={sectionRefs}
            lang={lang}
          />
        </section>
        <section id="about" ref={sectionRefs.about}>
          <AboutSection lang={lang} />
        </section>
        <SampleSection
          lang={lang}
          currentSection={currentSection}
          sectionRefs={sectionRefs}
        />
        <section id="sample" ref={sectionRefs.sample}>
          <ContentsSection lang={lang} />
        </section>
        <section id="info" ref={sectionRefs.info}>
          <InfoSection lang={lang} />
        </section>
        <Footer currentSection={currentSection} sectionRefs={sectionRefs} />
      </MainWrapper>

      <FixedButton
        $visible={showRecruitBtn}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        소모임 모집하기
      </FixedButton>
    </Container>
  );
};

export default MainPage;
