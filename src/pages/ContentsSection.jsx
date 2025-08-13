import React from "react";
import styled from "styled-components";

/* ===== 섹션 배경/포인트 컬러 ===== */
const Section = styled.section`
  width: 100%;
  background: #0b1e3f;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 150px 20px 160px;

  @media (max-width: 768px) {
    padding: 64px 30px 72px;
  }
`;

const Heading = styled.h2`
  margin: 0 0 14px;
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: -0.4px;
  color: #ffffff;

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
  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const Card = styled.article`
  background: #ffffff;
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
  background: #f4f6fb;
  display: grid;
  place-items: center;
  color: #334155;

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
  color: #0f172a;
  letter-spacing: -0.1px;
`;

const Desc = styled.p`
  margin: 0;
  color: #556070;
  font-size: 0.95rem;
  line-height: 1.45;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
      <Container>
        <Heading $accent={accent}>
          {lang === "ko" ? (
            <>
              Language Exchange <span>Social Party</span>
            </>
          ) : (
            <>
              Language Exchange <span>Social Party</span>
            </>
          )}
        </Heading>
        <Subtitle>
          {lang === "ko"
            ? "외국인·한국인 언어교환 소셜파티 참가 신청. 아래 신청서를 선택하세요."
            : "Apply to join our Language Exchange Social Party. Choose a form below."}
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
                {lang === "ko" ? "참가 신청" : "General Application"}
              </Title>
              <Desc>
                {lang === "ko"
                  ? "Language Exchange Korea 소셜 파티 일반 신청"
                  : "General registration for Language Exchange Korea Social Party"}
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
                {lang === "ko" ? "프로모션 신청" : "Promotion Application"}
              </Title>
              <Desc>
                {lang === "ko"
                  ? "브랜드 프로모션용 파티 신청"
                  : "Application for brand promotion party"}
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
