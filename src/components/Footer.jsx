import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: #b1b1b1;
  color: #ff2d95;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 NOWMAKES. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
