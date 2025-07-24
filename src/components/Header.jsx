import styled from "styled-components";
import logo from "../images/LogoHPink.svg";

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
    margin-left: 0;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    position: static;
    left: auto;
    transform: none;
  }
  @media (max-width: 450px) {
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

const Header = ({ currentSection, sectionRefs }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <LogoImage src={logo} alt="MoneyMakingSNS" />
      </Logo>
      <Nav>
        <NavItem
          onClick={() => scrollToSection("about")}
          $active={currentSection === "about"}
        >
          소개
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          $active={currentSection === "sample"}
        >
          샘플
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("info")}
          $active={currentSection === "info"}
        >
          서비스
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
