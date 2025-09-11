import React from "react";
import styled from "styled-components";
import logoImage from "../images/LogoLEKw.png";

/* ===== 섹션 배경/포인트 컬러 ===== */
const Section = styled.section`
  width: 100%;
  background: #1b1b1b;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 150px 20px 150px;

  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  @media (max-width: 768px) {
    padding: 64px 30px 72px;
  }
`;

const Logo = styled.img`
  height: 180px;
  object-fit: contain;
  z-index: 3;

  @media (max-width: 768px) {
    height: 110px;
  }
`;

const Heading = styled.h2`
  margin: 0 0 14px;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.4px;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: ${({ $accent }) => $accent || "#ff2d95"};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  margin: 0 0 28px;
  color: #d4af37;
  font-size: 1.02rem;
  line-height: 1.6;
  text-align: center;
  @media (min-width: 1500px) {
    font-size: 1.3rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 1500px) {
    gap: 40px;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const Card = styled.article`
  background: #0b0b0b;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 10px 28px rgba(10, 20, 50, 0.08);
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: center;
  gap: 16px;

  @media (max-width: 560px) {
    grid-template-columns: 48px 1fr;
    grid-template-rows: auto auto;
    gap: 12px;
  }
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #bebebe;
  display: grid;
  place-items: center;
  color: #000000;

  svg {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 560px) {
    width: 48px;
    height: 48px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const CardText = styled.div`
  min-width: 0; /* 줄바꿈 안전 */
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 1.05rem;
  font-weight: 800;
  color: #fafafa;
  letter-spacing: -0.1px;
  @media (min-width: 1500px) {
    font-size: 1.3rem;
  }
`;

const Desc = styled.p`
  margin: 0;
  color: #b6b6b6;
  font-size: 0.95rem;
  line-height: 1.45;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 1500px) {
    font-size: 1.2rem;
  }
  @media (max-width: 560px) {
    white-space: normal;
  }
`;

const CTA = styled.a`
  height: 40px;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.92rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  background: ${({ $accent }) => $accent || "#ff2d95"};
  color: #fff;
  box-shadow: 0 8px 20px rgba(255, 45, 149, 0.25);

  &:hover {
    filter: brightness(0.97);
  }
  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 560px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

/* ===== 실제 섹션 ===== */
const ContentsSection = ({ bg, accent, lang }) => {
  return (
    <Section $bg={bg}>
      <div style={{ display: "none" }} aria-hidden="true">
        <h1>Language Exchange Korea Contents</h1>
        <p>
          Language Exchange Korea (랭귀지익스체인지코리아)는 다양한 언어 교환
          콘텐츠를 제공합니다. 한국어·영어 학습, 문화 교류 활동, 지역 기반
          프로그램을 통해 외국인과 한국인이 함께 성장합니다.
        </p>
      </div>
      <Container>
        <Heading $accent={accent}>
          <Logo src={logoImage} alt="LEK Logo" />
          {lang === "ko" ? (
            <>
              <span>Join the Social Party Now</span>
            </>
          ) : (
            <>
              <span>Join the Social Party Now</span>
            </>
          )}
        </Heading>
        <Subtitle>
          {lang === "ko" ? (
            <>외국인·한국인 언어교환 소셜파티 참가 신청</>
          ) : (
            <>Apply to join our Language Exchange Social Party</>
          )}
        </Subtitle>

        <CardGrid>
          <Card>
            <IconWrap aria-hidden>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 7a2 2 0 0 1 2-2h8l4 4v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path d="M13 5v4h4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </IconWrap>

            <CardText>
              <Title>
                {lang === "ko"
                  ? "한국인 참가 신청"
                  : "Korean Participant Application"}
              </Title>
              <Desc>
                {lang === "ko"
                  ? "Language Exchange Korea"
                  : "Language Exchange Korea"}
              </Desc>
            </CardText>

            <CTA
              $accent={accent}
              href="https://litt.ly/languageexchangekorea"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "ko" ? "신청하기" : "Apply"}
            </CTA>
          </Card>

          <Card>
            <IconWrap aria-hidden>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12h4l8-5v10l-8-5H3z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M7 13v4a2 2 0 0 0 2 2h1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </IconWrap>

            <CardText>
              <Title>
                {lang === "ko"
                  ? "Foreigner Participant Application"
                  : "Foreigner Participant Application"}
              </Title>
              <Desc>
                {lang === "ko"
                  ? "Language Exchange Korea"
                  : "Language Exchange Korea"}
              </Desc>
            </CardText>

            <CTA
              $accent={accent}
              href="https://litt.ly/languageexchangekoreapromotion"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "ko" ? "신청하기" : "Apply"}
            </CTA>
          </Card>
        </CardGrid>
      </Container>
    </Section>
  );
};

export default ContentsSection;
