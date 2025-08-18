import styled from "styled-components";
import LEKLogo from "../images/LogoPinkLEKs.png";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  background-color: transparent;
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "saturate(120%) blur(14px)" : "none"};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "saturate(120%) blur(14px)" : "none"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none"};
  transition: background-color 220ms ease, backdrop-filter 220ms ease,
    box-shadow 220ms ease;
  z-index: 999;
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    justify-content: center;
    height: 70px;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-left: 20px;
  @media (max-width: 900px) {
    position: static;
    left: auto;
  }
  @media (max-width: 450px) {
    align-items: flex-start;
  }
`;

const LogoImage = styled.div`
  width: 100%;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
  background-image: url(${LEKLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    width: 40%;
    height: 90px;
  }
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-55%);
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 900px) {
    position: static;
    left: auto;
    transform: none;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: ${({ $active }) => ($active ? "#ff2d95" : "	#858585")};
  border-bottom: ${({ $active }) => ($active ? `2px solid #ff2d95` : "none")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.1s ease-in-out;
  }
`;

const LangButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const LangText = styled.span`
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#ff2d95" : "#858585")};
  transition: color 0.5s ease;

  &:hover {
    color: #ff2d95;
  }
`;

const Divider = styled.span`
  color: #858585;
`;

const Header = ({ currentSection, sectionRefs, lang, setLang }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const [scrolled, setScrolled] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0); // 0보다 크면 즉시 ON
    onScroll(); // 첫 렌더에서도 반영
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <LogoImage $isMobile={isMobile} />
      </Logo>
      <Nav>
        <NavItem
          onClick={() => scrollToSection("hero")}
          $active={currentSection === "hero"}
        >
          {lang === "ko" ? "홈" : "Home"}
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("about")}
          $active={currentSection === "about"}
        >
          {lang === "ko" ? "소개" : "About"}
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          $active={currentSection === "sample"}
        >
          {lang === "ko" ? "상품" : "Item"}
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("info")}
          $active={currentSection === "info"}
        >
          {lang === "ko" ? "서비스" : "Service"}
        </NavItem>
      </Nav>
      <LangButtonWrapper>
        <LangText $active={lang === "ko"} onClick={() => setLang("ko")}>
          KOR
        </LangText>
        <Divider>/</Divider>
        <LangText $active={lang === "en"} onClick={() => setLang("en")}>
          ENG
        </LangText>
      </LangButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
