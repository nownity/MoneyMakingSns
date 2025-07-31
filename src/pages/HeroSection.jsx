import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff2d95;
`;

const HeroSection = () => {
  return (
    <Section>
      <Title>MAIN PAGE</Title>
    </Section>
  );
};

export default HeroSection;
