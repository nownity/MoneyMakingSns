import styled from "styled-components";

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
`;

const Logo = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const LogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ff2d95;
`;

const Nav = styled.nav`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#FF73B9" : "	#858585")};
  border-bottom: ${({ active }) => (active ? `2px solid #FF73B9` : "none")};
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
        <LogoText>MoneyMakingSNS</LogoText>
        <LogoText>돈이 되는 마케팅</LogoText>
      </Logo>
      <Nav>
        <NavItem
          onClick={() => scrollToSection("about")}
          active={currentSection === "about"}
        >
          소개
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          active={currentSection === "sample"}
        >
          샘플
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("info")}
          active={currentSection === "info"}
        >
          서비스
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
