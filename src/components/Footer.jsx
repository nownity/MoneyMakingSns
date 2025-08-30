import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import logoImage from "../images/LogoLEKw.png";

const Logo = styled.img`
  height: 50px;
  object-fit: contain;
  z-index: 3;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: #0c0c0c;
  color: #ffffff;
  padding: 40px 20px 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLogo = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #ff2d95;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #d3d3d3;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    color: #ff2d95;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #dddddd;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      color: #ff2d95;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CopyRight = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  color: #ffffff;
  border-top: 1px solid #ddd;
  padding-top: 15px;
  @media (min-width: 1500px) {
    margin-top: 60px;
  }
`;

const Footer = ({ currentSection, sectionRefs }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <FooterLogo
            onClick={() => scrollToSection("hero")}
            $active={currentSection === "hero"}
          >
            <Logo src={logoImage} alt="LEK Logo" />
          </FooterLogo>
          <p>서울특별시 송파구 동남로 189, 4층 406호</p>
          <p>대표: 배윤신</p>
          <p>사업자등록번호: 895-02-03035</p>
          <p>Tel: 1668-3729</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Menu</h3>
          <FooterLink
            onClick={() => scrollToSection("about")}
            $active={currentSection === "about"}
          >
            회사소개
          </FooterLink>
          <FooterLink
            onClick={() => scrollToSection("sample")}
            $active={currentSection === "sample"}
          >
            프로그램 안내
          </FooterLink>
          <FooterLink
            onClick={() => scrollToSection("info")}
            $active={currentSection === "info"}
          >
            서비스 검색
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a
              href="https://www.instagram.com/languageexchangekorea/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.threads.com/@languageexchangekorea"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillThreadsFill />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterContainer>

      <CopyRight>
        © 2025 LanguageExchangeKorea. All rights reserved.
        <br />
        <span style={{ fontSize: "12px", color: "#999" }}>
          Made by{" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#999", textDecoration: "none" }}
          >
            NOWMAKES
          </a>
        </span>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
