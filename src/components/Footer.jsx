import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  color: #333;
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
  color: #333;
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
    color: #333;
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
  color: #777;
  border-top: 1px solid #ddd;
  padding-top: 15px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* 회사 정보 */}
        <FooterColumn>
          <FooterLogo>LanguageExchangeKorea</FooterLogo>
          <p>서울특별시 강남구 어딘가 123, 5층</p>
          <p>대표: 배윤신</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>Tel: 02-123-4567</p>
          <p>Email: info@lekorea.com</p>
        </FooterColumn>

        {/* 메뉴 링크 */}
        <FooterColumn>
          <h4>Menu</h4>
          <FooterLink href="/about">회사소개</FooterLink>
          <FooterLink href="/programs">프로그램 안내</FooterLink>
          <FooterLink href="/events">서비스 검색</FooterLink>
        </FooterColumn>

        {/* SNS */}
        <FooterColumn>
          <h4>Follow Us</h4>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterContainer>

      <CopyRight>
        © 2025 Language Exchange Korea. All rights reserved.
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
