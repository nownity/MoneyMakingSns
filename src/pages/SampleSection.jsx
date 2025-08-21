import styled from "styled-components";
import sample1 from "../images/Sample1.jpg";
import wechat from "../images/wechat.jpg";
import seoulMap from "../images/seoul-outline-final.png";
import busanMap from "../images/busan-outline-final.png";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";

/* ===== 색상 토큰 ===== */
const NAVY = "#0b1e3f";
const PINK = "#ff2d95";
const GRAY_BG = "#f6f7fb";
const BLACK = "#0c0c0c";
const TEXT_WHITE = "#0f172a";
const TEXT_DARK = "#727272";
const TEXT_MUTED = "#f6f7fb";
const CARD_SHADOW = "0 8px 26px rgba(10, 20, 50, 0.08)";

/* ===== 공통 레이아웃 ===== */
const Page = styled.section`
  width: 100%;
  background: ${NAVY};
`;

const Section = styled.section`
  width: 100%;
  background: ${({ $invert }) => ($invert ? BLACK : BLACK)};
  color: ${({ $invert }) => ($invert ? "#fff" : TEXT_WHITE)};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: ${({ $invert }) => ($invert ? "75vh" : "92vh")};
  display: grid;
  align-content: ${({ $top }) => ($top ? "start" : "center")};
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
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
  border: 2px solid white;
  background: transparent;
  color: #ffffff;
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

/* ========================= */
/* ===== 섹션 3 전용 UI ===== */
/* ========================= */

/* 전체 래핑 (두 칼럼) */
const TrackWrap = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 28px;
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

/* 좌측: 텍스트 카드 스택 */
const Stack = styled.div`
  display: grid;
  gap: 18px;
`;

/* 공통 카드 강화: 더 촘촘한 라인, 라운드, 내부 그레인 */
const SolidCard = styled(SoftBox)`
  position: relative;
  overflow: hidden;
  padding: 22px 20px;

  /* 미세한 그레인은 유지 */
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/grain.png");
    background-repeat: repeat;
    opacity: 0.06;
    pointer-events: none;
    z-index: 0;
  }

  /* ⬇️ -webkit-mask 없이 그라디언트 보더 만들어주기 */
  border: 1px solid transparent;
  border-radius: 18px;
  background:
    /* 내부 채움 (다크 톤 유지) */ linear-gradient(
        ${({ $invert }) => ($invert ? "rgba(255,255,255,0.06)" : "#fff")},
        ${({ $invert }) => ($invert ? "rgba(255,255,255,0.06)" : "#fff")}
      )
      padding-box,
    /* 테두리 그라디언트 */
      linear-gradient(
        180deg,
        rgba(255, 45, 149, 0.18),
        rgba(255, 255, 255, 0.06)
      )
      border-box;

  /* 내용물 위로 덮이지 않게 */
  > * {
    position: relative;
    z-index: 1;
  }
`;

/* 우측: 피쳐 이미지 쇼케이스 */
const FeatureShowcase = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  min-height: 360px;
  background: url(${({ $src }) => $src}) center/cover no-repeat;

  /* 전체 톤 통일용 필터 스택 */
  filter: grayscale(0.15) brightness(0.9) contrast(0.98);

  &:before {
    /* 블러 + 그레인 + 살짝 어두운 무드 */
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(12, 12, 12, 0.25) 0%,
        rgba(12, 12, 12, 0.6) 100%
      ),
      radial-gradient(
        120% 80% at 10% 0%,
        rgba(255, 45, 149, 0.08) 0%,
        transparent 60%
      ),
      radial-gradient(
        120% 80% at 90% 100%,
        rgba(255, 45, 149, 0.06) 0%,
        transparent 60%
      );
    z-index: 1;
  }

  &:after {
    /* 매우 은은한 그레인 텍스처 */
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/grain.png");
    background-repeat: repeat;
    opacity: 0.08;
    mix-blend-mode: overlay;
    z-index: 2;
  }
`;

/* 우측 상단 리본 배지 */
const Ribbon = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 45, 149, 0.18);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
`;

/* 우측 하단 캡션 박스 */
const Caption = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 3;
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(12, 12, 12, 0.6);
  color: #f1f5f9;
  font-size: 0.86rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
`;

/* 하단 하이라이트 바 */
const HighlightBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const HighlightChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.78rem;
  letter-spacing: 0.01em;
`;

/* ========================= */

const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 좌 텍스트/이미지 | 우 인사이트 */
  gap: 36px;
  align-items: center;
  @media (max-width: 980px) {
    grid-template-columns: 1fr; /* 모바일 1열 */
    gap: 24px;
  }
`;

const RightCol = styled.div`
  display: grid;
  gap: 14px;
`;

/* ENG / SMB 라벨 */
const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${PINK};
  color: #fff;
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  width: fit-content;
`;

const LeadWrap = styled.div`
  display: grid;
  gap: 12px;
`;

const ExchangeIcon = styled(HiArrowPath)`
  font-size: 40px;
  color: ${PINK};
  opacity: 0.85;
  margin: 16px auto;

  @media (min-width: 769px) {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: center;
    transform: translateY(-50%) rotate(90deg); /* 가로 방향 */
    margin: 0;
  }
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

const UpgradeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const UpgradeArrow = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${PINK};
  font-weight: bold;

  @media (min-width: 769px) {
    font-size: 1.5rem;
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: center;
    transform: translateY(-50%);
  }
`;

const SampleSection = ({ currentSection, sectionRefs, lang }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      {/* 1. 왜 필요한가요 (가독성 강화된 디자인) */}
      <Section $invert>
        <Container $invert $top>
          <H1 style={{ textAlign: "center" }}>
            {lang === "ko" ? (
              <>
                Language Exchange Korea
                <br /> <span>왜 필요한가요?</span>
              </>
            ) : (
              <>
                Why do we need <span>Language Exchange Korea?</span>
              </>
            )}
          </H1>

          <LeadWrap
            style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
          >
            <P $invert>
              {lang === "ko" ? (
                <>
                  기존 커뮤니티나 언어교환 플랫폼은 많지만,
                  <br className="mobile-br" /> 실생활 언어 능력과 꾸준한
                  소통에는 한계가 있습니다.
                </>
              ) : (
                <>
                  There are many communities and exchange platforms,
                  <br className="mobile-br" /> but they fall short in real-life
                  language use and lasting interaction.
                </>
              )}
            </P>
            <P $invert>
              {lang === "ko" ? (
                <>
                  외국인은 늘고 있지만,소상공인은 내수 부진으로
                  <br className="mobile-br" /> 매출에 어려움을 겪고 있습니다.
                </>
              ) : (
                <>
                  Foreigners are increasing, but local businesses struggle due
                  to weak domestic demand.
                </>
              )}
            </P>
          </LeadWrap>

          <HeroSplit style={{ marginTop: 40 }}>
            <RightCol>
              <div style={{ display: "grid", gap: 32 }}>
                <SoftBox $invert>
                  <Tag>1.</Tag>
                  <Sub style={{ marginTop: 12, marginBottom: 8 }}>
                    {lang === "ko"
                      ? "성인 영어교육과 외국인의 정착 어려움"
                      : "Adult English education & adaptation challenges"}
                  </Sub>
                  <P $invert>
                    {lang === "ko" ? (
                      <>
                        외국인은 친구 만들기와 정착이 어렵고, 기존 영어
                        <br className="mobile-br" />
                        교육은 실용성이 낮습니다.
                      </>
                    ) : (
                      <>
                        Foreigners struggle to settle and make friends; English
                        education lacks practicality.
                      </>
                    )}
                  </P>
                </SoftBox>

                <SoftBox $invert>
                  <Tag>2.</Tag>
                  <Sub style={{ marginTop: 12, marginBottom: 8 }}>
                    {lang === "ko"
                      ? "외국인 수요와 지역 상권 단절"
                      : "Disconnected foreign demand & local markets"}
                  </Sub>
                  <P $invert>
                    {lang === "ko" ? (
                      <>
                        외국인 수요가 상권에 닿지 않아, 로컬 브랜딩이
                        <br className="mobile-br" />
                        필요합니다.
                      </>
                    ) : (
                      <>
                        Foreign demand isn’t reaching stores—local branding is
                        needed.
                      </>
                    )}
                  </P>
                </SoftBox>
              </div>
            </RightCol>
          </HeroSplit>
        </Container>
      </Section>

      <Section $invert>
        <Container $invert>
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

          <div
            style={{
              display: "grid",
              gap: "75px",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            {/* 항목 01 */}
            <div>
              <NumberDot style={{ margin: "0 auto" }}>01</NumberDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }}>
                {lang === "ko"
                  ? "실질적 언어능력 향상"
                  : "Practical language gains"}
              </Sub>
              <P style={{ textAlign: "center" }} $invert>
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
            </div>

            {/* 항목 02 */}
            <div>
              <NumberDot style={{ margin: "0 auto" }}>02</NumberDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }}>
                {lang === "ko"
                  ? "한국 적응 보조 & 일자리 연계"
                  : "Settlement support & job links"}
              </Sub>
              <P style={{ textAlign: "center" }} $invert>
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
            </div>

            {/* 항목 03 */}
            <div>
              <NumberDot style={{ margin: "0 auto" }}>03</NumberDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }}>
                {lang === "ko"
                  ? "글로벌 마케팅 & 로컬 브랜딩"
                  : "Global marketing & local branding"}
              </Sub>
              <P style={{ textAlign: "center" }}>
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
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 추진 실적 (네이비) — ★리디자인★ */}
      <Section $invert>
        <Container $invert>
          <H1 $invert>
            {lang === "ko" ? <span>추진 실적</span> : <span>Track Record</span>}
          </H1>

          <TrackWrap>
            {/* 좌측: 텍스트 카드 스택 */}
            <Stack>
              <SolidCard $invert>
                <Sub>
                  {lang === "ko"
                    ? "We Chat Pay 한국 파트너사 등록 완료"
                    : "Registered WeChat Pay partner in Korea"}
                </Sub>
                <P $invert style={{ marginTop: 8 }}>
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
                <HighlightBar>
                  <HighlightChip>#결제편의</HighlightChip>
                  <HighlightChip>#외국인친화</HighlightChip>
                  <HighlightChip>#커뮤니티연계</HighlightChip>
                </HighlightBar>
              </SolidCard>

              <SolidCard $invert>
                <Sub>
                  {lang === "ko"
                    ? "행사 진행 협찬사 네트워크 확보"
                    : "Growing sponsor network for events"}
                </Sub>
                <P $invert style={{ marginTop: 8 }}>
                  {lang === "ko"
                    ? "→ 주류/행사 물품 협찬 파트너 지속 확장 중"
                    : "→ Continuously expanding beverage and event-goods sponsors"}
                </P>
                <HighlightBar>
                  <HighlightChip>#브랜딩</HighlightChip>
                  <HighlightChip>#온오프라인행사</HighlightChip>
                  <HighlightChip>#상생</HighlightChip>
                </HighlightBar>
              </SolidCard>
            </Stack>

            {/* 우측: 피쳐 이미지 쇼케이스 */}
            <div>
              <FeatureShowcase
                $src={wechat}
                aria-label="WeChat Pay 파트너 쇼케이스"
              >
                <Ribbon>
                  {lang === "ko" ? "WeChat Pay Partner" : "WeChat Pay Partner"}
                </Ribbon>
                <Caption>
                  {lang === "ko"
                    ? "커뮤니티 제휴처 내 결제 경험 고도화"
                    : "Elevated payment experience at partner venues"}
                </Caption>
              </FeatureShowcase>
            </div>
          </TrackWrap>
        </Container>
      </Section>

      {/* 4. 대학/어학당 MOU & 상권 (화이트) */}
      <Section $invert>
        <Container $invert>
          <H1 $invert>
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
          <P $invert>
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
              <div>
                <Sub $invert>
                  {lang === "ko"
                    ? "부산 내 한국어 교육센터 및 소상공인 협약 진행"
                    : "MOUs with Busan K-language centers & SMBs"}
                </Sub>
                <P $invert>
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
            <SoftBox $invert>
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
          <H1 $invert>
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
              <P>
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
              <P>
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
              <P>
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

      {/* 5.5. 커뮤니티 연결 & 할인 정보 섹션 (화이트) */}
      <Section $invert>
        <Container $invert>
          <H1 $invert>
            다양한 정보 및 할인 혜택<span> 제공</span>
          </H1>

          <P>
            서울/부산 지역에서 <b>로컬 친구와의 연결</b>과{" "}
            <b>추천 장소·할인 정보 공유</b>를 통해 실질적인 여행 계획과{" "}
            <b>지속적인 커뮤니티 관계</b>가 가능합니다.
          </P>

          <TwoCol style={{ marginTop: 36 }}>
            <SoftBox $invert>
              <ImageBox
                $src={seoulMap}
                style={{ minHeight: 280 }}
                aria-label="서울 테두리 지도"
              />
              <Sub style={{ marginTop: 16 }}>서울 커뮤니티</Sub>
              <P>
                지역 친구와 정보 교류,
                <br className="mobile-br" />
                상권 할인 혜택 및 활동 기반 형성
              </P>
            </SoftBox>

            <ExchangeIcon />

            <SoftBox $invert>
              <ImageBox
                $src={busanMap}
                style={{ minHeight: 280 }}
                aria-label="부산 테두리 지도"
              />
              <Sub style={{ marginTop: 16 }}>부산 커뮤니티</Sub>
              <P>
                여행 정보 공유 및 로컬 추천 장소 활성화,
                <br className="mobile-br" />
                교류를 통한 관계 지속
              </P>
            </SoftBox>
          </TwoCol>

          <P
            style={{
              marginTop: 10,
              textAlign: "center",
              color: PINK,
              fontWeight: 700,
            }}
          >
            100개 이상 추천 장소 & 할인 정보 공유 중
          </P>
        </Container>
      </Section>

      {/* 6. 수요기업 한정 혜택 (화이트) */}
      <Section $invert>
        <Container $invert>
          <H1 $invert>
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

          <UpgradeWrap>
            <SoftBox $invert>
              <Sub>
                {lang === "ko" ? "기존 마케팅 상품" : "Standard package"}
              </Sub>
              <ul style={{ margin: "10px 0 0 18px", fontSize: "0.8rem" }}>
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
                      외국인 매출 성장 1년 패키지 / 커뮤니티 초대권{" "}
                      <b style={{ color: TEXT_DARK }}>연 6회</b>
                    </>
                  ) : (
                    <>
                      1-year foreign-sales growth kit /{" "}
                      <b style={{ color: TEXT_DARK }}>6</b> annual community
                      invites
                    </>
                  )}
                </li>
                <li>
                  {lang === "ko" ? (
                    <>
                      SNS 바이럴 <b style={{ color: TEXT_DARK }}>월 2건</b> /
                      구글 리뷰 다국어{" "}
                      <b style={{ color: TEXT_DARK }}>연 2건</b>
                    </>
                  ) : (
                    <>
                      <b style={{ color: TEXT_DARK }}>2</b> monthly SNS virals /{" "}
                      <b style={{ color: TEXT_DARK }}>2</b> annual multilingual
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
            </SoftBox>

            <UpgradeArrow>
              {/* 반응형 화살표 아이콘 */}
              {typeof window !== "undefined" && window.innerWidth > 768 ? (
                <FaArrowRight />
              ) : (
                <FaArrowDown />
              )}
            </UpgradeArrow>

            <SoftBox $invert>
              <Sub>
                {lang === "ko"
                  ? "참여/선정 시 적용 상품"
                  : "If selected: upgraded package"}
              </Sub>
              <ul style={{ margin: "10px 0 0 18px", fontSize: "0.8rem" }}>
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
                      리뷰 다국어 <b style={{ color: PINK }}>연 4건</b>
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
            </SoftBox>
          </UpgradeWrap>
        </Container>
      </Section>
    </Page>
  );
};

export default SampleSection;
