import styled from "styled-components";
import Image1 from "../images/mms1.jpg";
import Image2 from "../images/mms2.jpg";
import Image3 from "../images/mms3.jpg";
import useScrollFadeIn from "../hooks/useScrollFadIn";

const Section = styled.section`
  width: 100%;
  background-color: #0c0c0c;
  color: #fff;
  padding: 60px 20px;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 90px;

  span {
    color: #ff2d95;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 70px;
    margin-bottom: 70px;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const MoodImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 5px;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  filter: grayscale(0.3) brightness(0.5) contrast(0.95) blur(1.5px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/grain.png");
    background-repeat: repeat;
    opacity: 0.1;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 60%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
  }
`;

const TextOverlay = styled.div`
  text-align: center;
  margin-top: -60px;
  z-index: 5;
  position: relative;
  color: #fff;
  height: 170px; /* 고정 높이 */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StepTitle = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #ff2d95;
  mix-blend-mode: normal;
  margin-bottom: 4px;
`;

const MainText = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
`;

const AboutConcept = ({ lang = "ko" }) => {
  const fadeIn1 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn2 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn3 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn4 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn5 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn6 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn7 = useScrollFadeIn("up", 0.8, 0.5);

  const t =
    lang === "ko"
      ? {
          title: (
            <>
              About <span>us</span>
            </>
          ),
          s1: "외국인, 한국인, 소상공인이 서로를 응원하며\n함께 성장합니다.",
          s2: "언어, 문화, 지역을 잇는사회혁신 플랫폼입니다.",
          s3: "실용 언어학습, 문화 교류,로컬 브랜딩까지 한 번에!",
        }
      : {
          title: (
            <>
              About <span>us</span>
            </>
          ),
          s1: "Foreigners, Koreans, and local shopsgrow together with support.",
          s2: "A platform for connectinglanguage, culture, and communities.",
          s3: "Language learning, culture sharing,and local branding in one.",
        };

  return (
    <Section>
      <PageTitle {...fadeIn1}>{t.title}</PageTitle>
      <GridWrapper>
        <Block>
          <MoodImage src={Image1} {...fadeIn2} />
          <TextOverlay {...fadeIn3}>
            <StepTitle>First.</StepTitle>
            <MainText>Language · Culture · Local</MainText>
            <SubText>{t.s1}</SubText>
          </TextOverlay>
        </Block>

        <Block>
          <MoodImage src={Image2} {...fadeIn4} />
          <TextOverlay {...fadeIn5}>
            <StepTitle>Second.</StepTitle>
            <MainText>Platform Based Innovation</MainText>
            <SubText>{t.s2}</SubText>
          </TextOverlay>
        </Block>

        <Block>
          <MoodImage src={Image3} {...fadeIn6} />
          <TextOverlay {...fadeIn7}>
            <StepTitle>Third.</StepTitle>
            <MainText>Three Values Realized</MainText>
            <SubText>{t.s3}</SubText>
          </TextOverlay>
        </Block>
      </GridWrapper>
    </Section>
  );
};

export default AboutConcept;
