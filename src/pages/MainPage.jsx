import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "../pages/HeroSection";
import AboutSection from "../pages/AboutSection";
import SampleSection from "../pages/SampleSection";
import InfoSection from "../pages/InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
`;
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState("hero");
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
          <HeroSection />
        </section>
        <section id="about" ref={sectionRefs.about}>
          <AboutSection />
        </section>
        <section id="sample" ref={sectionRefs.sample}>
          <SampleSection />
        </section>
        <section id="info" ref={sectionRefs.info}>
          <InfoSection />
        </section>
        <Footer />
      </MainWrapper>
    </Container>
  );
};

export default MainPage;
