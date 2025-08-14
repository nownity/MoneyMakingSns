import React from "react";
import styled from "styled-components";
import sample1 from "../images/Sample1.jpg";
import wechat from "../images/wechat.jpg";

/* ===== 색상 토큰 ===== */
const NAVY = "#0b1e3f";
const PINK = "#ff2d95";
const WHITE = "#ffffff";
const GRAY_BG = "#f6f7fb";
const TEXT_DARK = "#0f172a";
const TEXT_MUTED = "#475569";
const CARD_SHADOW = "0 8px 26px rgba(10, 20, 50, 0.08)";

/* ===== 공통 레이아웃 ===== */
const Page = styled.section`
  width: 100%;
  background: ${NAVY};
`;

const Section = styled.section`
  width: 100%;
  background: ${({ $invert }) => ($invert ? NAVY : WHITE)};
  color: ${({ $invert }) => ($invert ? "#fff" : TEXT_DARK)};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: ${({ $invert }) => ($invert ? "85vh" : "92vh")};
  display: grid;
  align-content: center;
  gap: 28px;
  padding: 96px 20px;

  @media (max-width: 768px) {
    min-height: 92vh;
    padding: 72px 34px;
  }
`;

const H1 = styled.h2`
  font-size: 2.6rem;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin: 0;

  span {
    color: ${PINK};
  }

  .spanB {
    color: ${TEXT_DARK};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Sub = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.2px;

  span {
    color: ${PINK};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const P = styled.p`
  font-size: 1.06rem;
  color: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.85)" : TEXT_MUTED)};
  line-height: 1.75;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ColLeft = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto 1fr;
  height: 100%;
  align-items: start;
  @media (max-width: 980px) {
    grid-template-rows: auto auto auto;
    height: auto;
  }
`;

const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 2px solid black;
  background: transparent;
  color: #000000;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff2d95;
    border-color: #ff2d95;
  }

  @media (max-width: 980px) {
    margin-top: 30px;
    font-size: 0.9rem;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

/* ----- NEW: 6번 섹션용 반응형 2컬럼 래퍼 ----- */
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서 위아래 배치 */
  }
`;

/* ===== 단색 아이콘/넘버 ===== */
const Circle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 999px;
  background: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.1)" : GRAY_BG)};
  display: grid;
  place-items: center;
  color: ${({ $invert }) => ($invert ? "#fff" : TEXT_MUTED)};
  font-weight: 900;
  box-shadow: ${({ $invert }) => ($invert ? "none" : CARD_SHADOW)};
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const NumberDot = styled(Circle)`
  width: 70px;
  height: 70px;
  color: #fff;
  background: ${PINK};
  box-shadow: 0 10px 32px rgba(255, 45, 149, 0.25);
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

/* ===== 카드/박스 ===== */
const SoftBox = styled.div`
  background: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.06)" : "#fff")};
  border: ${({ $invert }) =>
    $invert ? "1px solid rgba(255,255,255,0.12)" : "1px solid #eef1f6"};
  border-radius: 18px;
  padding: 24px 22px;
  box-shadow: ${({ $invert }) => ($invert ? "none" : CARD_SHADOW)};
`;

const ImageBox = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 16px;
  background: ${({ $invert, $src }) =>
    $src
      ? `url(${$src}) center/cover no-repeat`
      : $invert
      ? "rgba(255,255,255,0.06)"
      : GRAY_BG};
  display: grid;
  place-items: center;
  font-weight: 800;
  color: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.7)" : TEXT_MUTED)};
  box-shadow: ${({ $invert }) => ($invert ? "none" : CARD_SHADOW)};
  overflow: hidden; /* 모서리 깔끔하게 */
`;

/* ===== 페이지 구성 ===== */
const SampleSection = ({ currentSection, sectionRefs, lang }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      {/* 1. 왜 필요한가요 (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            {lang === "ko" ? (
              <>
                Language Exchange Korea,
                <br className="mobile-br" /> <span>왜 필요한가요?</span>
              </>
            ) : (
              <>
                Why do we need <span>Language Exchange Korea?</span>
              </>
            )}
          </H1>

          <Grid2>
            <div>
              <P $invert>
                {lang === "ko" ? (
                  <>
                    이미 외국인과 한국인 소통 커뮤니티도 있고,{" "}
                    <br className="mobile-br" /> 언어교환 플랫폼도 존재합니다.{" "}
                    <br className="mobile-br" /> 하지만
                    <b>실생활에 쓰일 언어 능력에 도움이 되지 않고</b>{" "}
                    <br className="mobile-br" /> 지속적인 소통 기회가
                    부족합니다.
                  </>
                ) : (
                  <>
                    There are already communities and language-exchange
                    platforms, but they often{" "}
                    <b>don’t build real-life language skills</b> and lack
                    sustained chances to connect.
                  </>
                )}
              </P>
              <P $invert>
                {lang === "ko" ? (
                  <>
                    외국인 유학생 및 여행객이 증가하지만
                    <br className="mobile-br" />
                    <b>소상공인은 내수경기 불황으로 매출 감소</b>를 겪고
                    있습니다.
                  </>
                ) : (
                  <>
                    While international students and visitors are increasing,
                    <b> local small businesses face declining sales</b>.
                  </>
                )}
              </P>
              <ImageBox $invert>
                {lang === "ko" ? "커버 히어로 이미지 자리" : "Cover hero image"}
              </ImageBox>
            </div>

            <SoftBox
              $invert
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50px 1fr",
                  gap: 10,
                }}
              >
                <Circle $invert>ENG</Circle>
                <div>
                  <Sub>
                    {lang === "ko" ? (
                      <>
                        성인 영어 교육 및
                        <br className="mobile-br" />
                        <span>외국인의 한국 적응 한계</span>
                      </>
                    ) : (
                      <>
                        Adult English education &
                        <span> limits in settling in Korea</span>
                      </>
                    )}
                  </Sub>
                  <P $invert>
                    {lang === "ko" ? (
                      <>
                        한국식 영어교육은 글로벌 시장에서 바로 도움 되기
                        어렵습니다.
                        <br className="mobile-br" />
                        방한 외국인은 늘지만 생활 적응과
                        <br className="mobile-br" />
                        친구 사귈 기회는 부족합니다.
                      </>
                    ) : (
                      <>
                        Traditional English education often fails to help in
                        real global contexts. More foreigners visit, yet they
                        lack chances to adapt and make friends.
                      </>
                    )}
                  </P>
                </div>
              </div>

              <div style={{ height: 18 }} />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50px 1fr",
                  gap: 10,
                }}
              >
                <Circle $invert>SMB</Circle>
                <div>
                  <Sub>
                    {lang === "ko" ? (
                      <>
                        소상공인의 <span>지속적인 매출 하락</span>
                      </>
                    ) : (
                      <>
                        SMBs facing <span>continued revenue decline</span>
                      </>
                    )}
                  </Sub>
                  <P $invert>
                    {lang === "ko" ? (
                      <>
                        외국인 수요와 지역 상권이 <br className="mobile-br" />
                        제대로 연결되지 못합니다. <br className="mobile-br" />
                        <b>로컬 브랜딩/세일즈</b>가 필요합니다.
                      </>
                    ) : (
                      <>
                        Foreign demand and local districts aren’t well
                        connected. Stronger <b>local branding & sales</b> are
                        needed.
                      </>
                    )}
                  </P>
                </div>
              </div>
            </SoftBox>
          </Grid2>
        </Container>
      </Section>

      {/* 2. 우리는 이렇게 해결합니다 (화이트) */}
      <Section>
        <Container>
          <H1>
            {lang === "ko" ? (
              <>
                우리는 <span>이렇게 해결합니다.</span>
              </>
            ) : (
              <>
                Here’s how <span>we solve it.</span>
              </>
            )}
          </H1>
          <P>
            {lang === "ko" ? (
              <>
                외국인 유학생, 한국인, 소상공인이 함께 성장하는 언어
                <br className="mobile-br" />
                교환 커뮤니티를 개발해 <b>선순환 구조</b>를 구축합니다.
              </>
            ) : (
              <>
                We build a language-exchange community where international
                students, locals, and SMBs grow together—creating a{" "}
                <b>positive flywheel</b>.
              </>
            )}
          </P>

          <Grid3>
            <SoftBox>
              <NumberDot>01</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko"
                  ? "실질적 언어능력 향상"
                  : "Practical language gains"}
              </Sub>
              <P>
                {lang === "ko" ? (
                  <>
                    한국인–외국인 간 언어 교환으로 <b>실생활 외국어</b>
                    <br className="mobile-br" />
                    학습 효과를 극대화합니다.
                  </>
                ) : (
                  <>
                    Native-to-learner exchanges maximize{" "}
                    <b>real-life language</b> skills.
                  </>
                )}
              </P>
            </SoftBox>

            <SoftBox>
              <NumberDot>02</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko"
                  ? "한국 적응 보조 & 일자리 연계"
                  : "Settlement support & job links"}
              </Sub>
              <P>
                {lang === "ko" ? (
                  <>
                    문화 교류 통해 외국인의 한국 적응도를 높이고,
                    <br className="mobile-br" />
                    검증된 인재 채용 기회를 제공합니다.
                  </>
                ) : (
                  <>
                    Cultural exchange boosts settlement, and we connect{" "}
                    <b>screened talent</b> to jobs.
                  </>
                )}
              </P>
            </SoftBox>

            <SoftBox>
              <NumberDot>03</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko"
                  ? "글로벌 마케팅 & 로컬 브랜딩"
                  : "Global marketing & local branding"}
              </Sub>
              <P>
                {lang === "ko" ? (
                  <>
                    커뮤니티 공간·콘텐츠·세일즈로 <b>매출 증대</b>를
                    <br className="mobile-br" />
                    연결합니다.
                  </>
                ) : (
                  <>
                    Spaces, content, and sales programs drive{" "}
                    <b>revenue growth</b>.
                  </>
                )}
              </P>
            </SoftBox>
          </Grid3>
        </Container>
      </Section>

      {/* 3. 추진 실적 (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            {lang === "ko" ? <span>추진 실적</span> : <span>Track Record</span>}
          </H1>
          <Grid2>
            <div>
              <SoftBox $invert>
                <Sub>
                  {lang === "ko"
                    ? "We Chat Pay 한국 파트너사 등록 완료"
                    : "Registered WeChat Pay partner in Korea"}
                </Sub>
                <P $invert>
                  {lang === "ko" ? (
                    <>
                      부산 커뮤니티 제휴처에 위챗페이 도입
                      <br className="mobile-br" /> → 외국인에게{" "}
                      <b>편리한 결제 환경</b> 제공
                    </>
                  ) : (
                    <>
                      Deployed WeChat Pay with Busan partners
                      <br className="mobile-br" /> →{" "}
                      <b>frictionless payments</b> for foreigners
                    </>
                  )}
                </P>
              </SoftBox>

              <div style={{ height: 16 }} />

              <SoftBox $invert>
                <Sub>
                  {lang === "ko"
                    ? "행사 진행 협찬사 네트워크 확보"
                    : "Growing sponsor network for events"}
                </Sub>
                <P $invert>
                  {lang === "ko"
                    ? "→ 주류/행사 물품 협찬 파트너 지속 확장 중"
                    : "→ Continuously expanding beverage and event-goods sponsors"}
                </P>
              </SoftBox>
            </div>

            <ImageBox $invert $src={wechat} />
          </Grid2>
        </Container>
      </Section>

      {/* 4. 대학/어학당 MOU & 상권 (화이트) */}
      <Section>
        <Container>
          <H1>
            {lang === "ko" ? (
              <>
                서울·부산 내 대학 및 어학당 <span>MOU</span>
              </>
            ) : (
              <>
                University & Language Institute <span>MOUs</span> in Seoul/Busan
              </>
            )}
          </H1>
          <P>
            {lang === "ko" ? (
              <>
                건국대학교 한국어학당 협약 완료
                <br className="mobile-br" />외 서울, 부산 각 대학 어학당 30개
                협약 진행중
              </>
            ) : (
              <>
                MOU completed with Konkuk University Korean Language Institute,
                plus 30 other university language institutes in Seoul and Busan
                in progress.
              </>
            )}
          </P>
          <Grid2 style={{ marginTop: 24 }}>
            <ColLeft>
              {/* 1행: 텍스트 */}
              <div>
                <Sub>
                  {lang === "ko"
                    ? "부산 내 한국어 교육센터 및 소상공인 협약 진행"
                    : "MOUs with Busan K-language centers & SMBs"}
                </Sub>
                <P>
                  {lang === "ko" ? (
                    <>
                      광안리 상권 중심 업종(음식점·펜션·바 등) 미팅 완료
                      <br className="mobile-br" />
                      <b>→ 커뮤니티 티켓 구매 시 10% 할인</b> 협의 완료
                    </>
                  ) : (
                    <>
                      Meetings done across Gwangalli district (F&B, pensions,
                      bars). <b>10% discount</b> on community ticket purchase
                      agreed.
                    </>
                  )}
                </P>
              </div>

              <div />

              <ButtonCenter>
                <Button
                  onClick={() => scrollToSection("info")}
                  $active={currentSection === "info"}
                >
                  {lang === "ko" ? "매장 찾아보기" : "Learn More"}
                </Button>
              </ButtonCenter>

              <div />
            </ColLeft>
            <SoftBox>
              <ImageBox
                $src={sample1}
                style={{ minHeight: 280, boxShadow: "none" }}
                aria-label={
                  lang === "ko"
                    ? "구글 지도/상권 맵 캡처"
                    : "Google Maps / district map capture"
                }
              />
            </SoftBox>
          </Grid2>
        </Container>
      </Section>

      {/* 5. 협업 시 기대효과 (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            {lang === "ko" ? (
              <>
                협업 시 <span>기대효과</span>
              </>
            ) : (
              <>
                Expected <span>Benefits</span> of Collaboration
              </>
            )}
          </H1>
          <Grid3>
            <SoftBox $invert>
              <NumberDot>01</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko" ? "해외 마케팅 대행" : "Overseas marketing"}
              </Sub>
              <P $invert>
                {lang === "ko" ? (
                  <>
                    체험 기반으로 제품을 직접 노출,
                    <br className="mobile-br" />
                    해외 진출 없이도
                    <b>글로벌 반응</b> 확보
                  </>
                ) : (
                  <>
                    Experience-based exposure delivers <b>global traction</b>{" "}
                    without overseas expansion.
                  </>
                )}
              </P>
            </SoftBox>

            <SoftBox $invert>
              <NumberDot>02</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko"
                  ? "외국인 인재 채용 기회"
                  : "Hiring foreign talent"}
              </Sub>
              <P $invert>
                {lang === "ko" ? (
                  <>
                    커뮤니티를 통해 검증된 인재를 연결,
                    <br className="mobile-br" /> 효율적 · 안정적 채용
                  </>
                ) : (
                  <>Connect with vetted talent for efficient, reliable hiring</>
                )}
              </P>
            </SoftBox>

            <SoftBox $invert>
              <NumberDot>03</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>
                {lang === "ko"
                  ? "정보/할인 혜택 제공"
                  : "Info & discount perks"}
              </Sub>
              <P $invert>
                {lang === "ko" ? (
                  <>
                    티켓 구매 시 협업사 할인 제공으로
                    <br className="mobile-br" />
                    상권 매출 증대와 <b>핵심 고객</b> 확보.
                  </>
                ) : (
                  <>
                    Ticket-linked partner discounts boost sales and secure{" "}
                    <b>core customers</b>.
                  </>
                )}
              </P>
            </SoftBox>
          </Grid3>
        </Container>
      </Section>

      {/* 6. 수요기업 한정 혜택 (화이트) */}
      <Section>
        <Container>
          <H1>
            {lang === "ko" ? (
              <>
                수요기업 참여·선정 시 <span>한정 혜택!</span>
              </>
            ) : (
              <>
                Exclusive <span>Benefits</span> for Selected Participants!
              </>
            )}
          </H1>

          <P>
            {lang === "ko" ? (
              <>
                선정 기업에만 제공되는 <b>한정 마케팅 2배 적용 이벤트</b>.
              </>
            ) : (
              <>
                A special offer: <b>2× marketing package</b> for selected
                companies only.
              </>
            )}
          </P>

          {/* 변경 포인트: 인라인 div → TwoCol 로 교체, 모바일에서 1열로 쌓임 */}
          <TwoCol>
            <SoftBox>
              <Sub>
                {lang === "ko" ? "기존 마케팅 상품" : "Standard package"}
              </Sub>
              <ul style={{ margin: "10px 0 0 18px" }}>
                <li>
                  {lang === "ko" ? (
                    <>
                      후기 영상 콘텐츠 <b style={{ color: TEXT_DARK }}>3건</b>{" "}
                      기획/배포
                    </>
                  ) : (
                    <>
                      <b style={{ color: TEXT_DARK }}>3</b> review videos
                      (plan/distribute)
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      별점 및 리뷰 <b style={{ color: TEXT_DARK }}>3건</b> 작성
                    </>
                  ) : (
                    <>
                      <b style={{ color: TEXT_DARK }}>3</b> ratings & reviews
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      외국인 매출 성장 1년 패키지 / 커뮤니티{" "}
                      <br className="mobile-br" />
                      초대권 <b style={{ color: TEXT_DARK }}>연 6회</b>
                    </>
                  ) : (
                    <>
                      1-year foreign-sales growth kit / 6 annual community
                      invites
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      SNS 바이럴 <b style={{ color: TEXT_DARK }}>월 2건</b> /
                      구글 리뷰
                      <br className="mobile-br" />
                      다국어 <b style={{ color: TEXT_DARK }}>연 2건</b>
                    </>
                  ) : (
                    <>
                      2 monthly SNS virals / 2 annual multilingual Google
                      reviews
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko"
                    ? "매출 발생 보장(미발생 시 전액 환불)"
                    : "Revenue guarantee (full refund if none)"}
                </li>
              </ul>
            </SoftBox>

            <SoftBox>
              <Sub>
                {lang === "ko"
                  ? "참여/선정 시 적용 상품"
                  : "If selected: upgraded package"}
              </Sub>
              <ul style={{ margin: "10px 0 0 18px" }}>
                <li>
                  {lang === "ko" ? (
                    <>
                      후기 영상 콘텐츠 <b style={{ color: PINK }}>6건</b>{" "}
                      기획/배포
                    </>
                  ) : (
                    <>
                      <b style={{ color: PINK }}>6</b> review videos
                      (plan/distribute)
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      별점 및 리뷰 <b style={{ color: PINK }}>6건</b> 작성
                    </>
                  ) : (
                    <>
                      <b style={{ color: PINK }}>6</b> ratings & reviews
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      커뮤니티 초대권 <b style={{ color: PINK }}>연 12회</b>
                    </>
                  ) : (
                    <>
                      <b style={{ color: PINK }}>12</b> annual community invites
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      SNS 바이럴 <b style={{ color: PINK }}>월 4건</b> / 구글
                      리뷰
                      <br className="mobile-br" />
                      다국어 <b style={{ color: PINK }}>연 4건</b>
                    </>
                  ) : (
                    <>
                      <b style={{ color: PINK }}>4</b> monthly SNS virals /{" "}
                      <b style={{ color: PINK }}>4</b> annual multilingual
                      Google reviews
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko"
                    ? "매출 발생 보장(미발생 시 전액 환불)"
                    : "Revenue guarantee (full refund if none)"}
                </li>
              </ul>

              <div
                style={{
                  textAlign: "center",
                  color: PINK,
                  fontWeight: 900,
                  marginTop: 10,
                }}
              >
                {lang === "ko" ? "← 2배 적용" : "← 2× upgrade"}
              </div>
            </SoftBox>
          </TwoCol>
        </Container>
      </Section>
    </Page>
  );
};

export default SampleSection;
