import styled from "styled-components";
import mockup from "../images/mockup.png";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f6f8;
  padding: 0 50px;
  position: relative;
`;

const Content = styled.div`
  max-width: 800px;
  z-index: 2; /* 글씨가 항상 위 */
  position: relative;
  padding-left: 100px;
  @media (max-width: 956px) {
    width: 78%;
    right: 50%;
    transform: translateX(50%);
    position: absolute;
    padding-left: 0;
  }
`;

const SmallTitle = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #444;
  line-height: 1.6;
`;

const Shape = styled.div`
  position: absolute;
  bottom: 0; /* 바닥에 붙이기 */
  right: 8%;
  width: 650px;
  height: 700px;
  background-color: #fafafa;
  border-radius: 500px 500px 0 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 1;
  transition: all 0.4s ease;
  padding-top: 100px;
  overflow: hidden;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    width: 90%;
  }
`;

const ShapeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.3);

  @media (max-width: 1400px) {
    display: none;
  }
`;

const AboutSection = ({ lang }) => {
  return (
    <Section>
      <Content>
        <SmallTitle>about</SmallTitle>
        <Heading>{lang === "ko" ? "About us" : "About us"}</Heading>
        <SubHeading>"Global Connection, Korean Experience"</SubHeading>
        <Description>
          {lang === "ko"
            ? `MoneyMakingSns는 한국 로컬 라이프를 전 세계와 공유하며,
            SNS를 통해 즐기고, 배우고, 수익을 창출하는 글로벌 커뮤니티입니다.
            단순한 여행이 아닌, 진짜 한국을 경험하고
            전 세계 친구들과 연결되는 새로운 라이프스타일을 제공합니다.`
            : `MoneyMakingSns is a global community sharing the Korean local lifestyle
            with the world, enjoying, learning, and creating income through SNS.
            It's not just travel – it's experiencing the real Korea
            and offering a new lifestyle connecting friends from around the globe.`}
        </Description>
      </Content>
      <Shape>
        <ShapeImage src={mockup} alt="About Image" />
      </Shape>
    </Section>
  );
};

export default AboutSection;
