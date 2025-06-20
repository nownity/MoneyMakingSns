import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ff73b9;
`;

const AboutSection = () => {
  return (
    <Section>
      <Heading>ABOUT</Heading>
    </Section>
  );
};

export default AboutSection;
