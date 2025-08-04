import styled from "styled-components";
import logo from "../images/LogoHPink.svg";
import mmsLogo from "../images/MMSLogoC.svg";
import LEKLogo from "../images/LogoPinkLEKs.png";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 999;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  @media (max-width: 450px) {
    justify-content: center;
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
  /* background-image: url(${({ $isMobile }) =>
    $isMobile ? mmsLogo : logo}); */
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
  color: ${({ $active }) => ($active ? "#FF73B9" : "	#858585")};
  border-bottom: ${({ $active }) => ($active ? `2px solid #FF73B9` : "none")};
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
  color: ${({ $active }) => ($active ? "#FF73B9" : "#858585")};
  transition: color 0.5s ease;

  &:hover {
    color: #ff73b9;
  }
`;

const Divider = styled.span`
  color: #858585;
`;

const Header = ({ currentSection, sectionRefs, lang, setLang }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <LogoImage $isMobile={isMobile} />
      </Logo>
      <Nav>
        <NavItem
          onClick={() => scrollToSection("hero")}
          $active={currentSection === "hero"}
        >
          {lang === "ko" ? "홈" : "HOME"}
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("about")}
          $active={currentSection === "about"}
        >
          {lang === "ko" ? "소개" : "ABOUT"}
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          $active={currentSection === "sample"}
        >
          {lang === "ko" ? "샘플" : "Sample"}
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
