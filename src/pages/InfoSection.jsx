import styled, { keyframes } from "styled-components";

// 롤링 애니메이션
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  height: 150px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  span {
    color: #ff2d95;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const Slider = styled.div`
  display: inline-flex;
  animation: ${scroll} 100s linear infinite;
`;

const LogoBox = styled.div`
  flex: 0 0 auto;
  width: 220px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const InfoSection = () => {
  const logos = ["NOWMAKES", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <Section>
      <Heading>
        SER<span>VICE</span>
      </Heading>
      <SliderWrapper>
        <Slider>
          {logos.concat(logos).map((logo, index) => (
            <LogoBox key={index}>{logo}</LogoBox>
          ))}
        </Slider>
      </SliderWrapper>
    </Section>
  );
};

export default InfoSection;
