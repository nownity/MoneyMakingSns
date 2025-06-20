import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b1e3f;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ff2d95;
`;

const SampleSection = () => {
  return (
    <Section>
      <Heading>SAMPLE</Heading>
    </Section>
  );
};

export default SampleSection;
