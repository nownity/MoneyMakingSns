import styled from "styled-components";
import mockup from "../images/mockup.png";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f6f8;
  padding: 0 50px;
  position: relative;
  @media (max-width: 768px) {
    height: 600px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  z-index: 2; /* 글씨가 항상 위 */
  position: relative;
  padding-left: 200px;
  @media (max-width: 956px) {
    width: 78%;
    right: 50%;
    transform: translateX(50%);
    position: absolute;
    padding-left: 0;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const SmallTitle = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  span {
    color: #ff2d95;
  }
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #444;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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
  padding-top: 100px;
  overflow: hidden;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    width: 90%;
    height: 550px;
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
        <Heading>
          About <span>us</span>
        </Heading>
        <SubHeading>"Global Connection, Korean Experience"</SubHeading>
        <Description>
          {lang === "ko"
            ? `LanguageExchangeKorea는 외국인, 한국인과 소상공인이 상생하는 문화를 만듭니다.
            우리는 언어 · 문화 · 지역 커뮤니티를 연결하는 플랫폼 기반의 사회혁신 기업입니다.
            외국인 유학생과 한국인, 소상공인을 연결하는 커뮤니티를 통해 실용 언어 학습, 문화 교류, 로컬 브랜딩이라는 세가지 가치를 동시에 실현하고 있습니다.`
            : `LanguageExchangeKorea fosters a culture of mutual growth among foreigners, Koreans, and local small businesses.
            We are a social innovation company based on a platform that connects language, culture, and local communities.
            Through a community that links international students, Koreans, and small business owners, we simultaneously realize three core values: practical language learning, cultural exchange, and local branding.`}
        </Description>
      </Content>
      <Shape>
        <ShapeImage src={mockup} alt="About Image" />
      </Shape>
    </Section>
  );
};

export default AboutSection;
