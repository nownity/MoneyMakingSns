import styled from "styled-components";
import sample1 from "../images/Sample1.jpg";
import wechat from "../images/wechat.jpg";
import seoulMap from "../images/seoul.png";
import busanMap from "../images/busan.png";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";
import useScrollFadeIn from "../hooks/useScrollFadIn";

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
  gap: 20px;
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
    font-size: 1.35rem;
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

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
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

const CenterDot = styled(NumberDot)`
  display: flex; /* 내부 숫자도 안전하게 중앙 */
  justify-content: center;
  align-items: center;
  margin-left: auto; /* 자기 자신을 중앙 배치 */
  margin-right: auto;
`;

/* ===== 카드/박스 ===== */
const SoftBox = styled.div`
  background: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.06)" : "#fff")};
  border: ${({ $invert }) =>
    $invert ? "1px solid rgba(255,255,255,0.12)" : "1px solid #eef1f6"};
  border-radius: 18px;
  padding: 20px 16px;
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

/* 공통 카드 강화 */
const SolidCard = styled(SoftBox)`
  position: relative;
  overflow: hidden;
  padding: 22px 20px;

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
`;

/* 우측: 피쳐 이미지 쇼케이스 */
const FeatureShowcase = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  min-height: 360px;
  background: url(${({ $src }) => $src}) center/cover no-repeat;
  filter: grayscale(0.15) brightness(0.9) contrast(0.98);

  &:before {
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
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/grain.png");
    background-repeat: repeat;
    opacity: 0.08;
    mix-blend-mode: overlay;
    z-index: 2;
  }

  @media (max-width: 450px) {
    min-height: 300px;
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
  font-size: 0.6rem;
  letter-spacing: 0.01em;
`;

/* ========================= */
/* ===== 섹션 4 전용 UI ==== */
/* ========================= */

const MOUWrap = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 28px;
  margin-top: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MOUStack = styled(Stack)`
  gap: 16px;
`;

const MOUCard = styled(SolidCard)`
  padding: 20px 18px;
  border-radius: 16px;
`;

const StatRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const StatPill = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.9);
`;

const MOUSubtle = styled.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

/* ========================= */
/* ===== 섹션 5.5 전용 UI === */
/* ========================= */

/* PC: [지도 | 아이콘 | 지도]  /  Mobile: 세로 스택 */
const CommunityRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 72px 1fr;
  gap: 24px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* 맵 카드 박스(높이 안정화) */
const MapCard = styled(SoftBox)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

/* 맵 이미지 비율 고정 */
const MapImage = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 14px;
  background: ${({ $src }) =>
    $src ? `url(${$src}) center/cover no-repeat` : GRAY_BG};
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(12, 12, 12, 0.1); /* ← 어둡게 정도 조절 */
    z-index: 1;
  }
`;

/* 가운데 아이콘 셀 */
const IconCell = styled.div`
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    padding: 6px 0;
  }
`;

/* 5.5 전용 아이콘(이름 충돌 방지) */
const ExchangeIcon5 = styled(HiArrowPath)`
  font-size: 40px;
  color: ${PINK};
  opacity: 0.9;

  @media (min-width: 769px) {
    transform: rotate(90deg);
  }
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

const CenterWrap = styled.div`
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
`;

const LeadP = styled(P)`
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  line-height: 1.9;
  letter-spacing: -0.01em;
  opacity: 0.95;

  /* 긴 문장 줄바꿈 보정 */
  @supports (text-wrap: balance) {
    text-wrap: balance;
  }

  @media (max-width: 768px) {
    line-height: 1.85;
  }
`;

const SampleSection = ({ currentSection, sectionRefs, lang }) => {
  const fadeIn1 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn2 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn3 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn4 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn5 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn6 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn7 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn8 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn9 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn10 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn11 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn12 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn13 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn14 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn15 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn16 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn17 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn18 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn19 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn20 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn21 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn22 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn23 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn24 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn25 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn26 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn27 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn28 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn29 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn30 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn31 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn32 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn33 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn34 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn35 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn36 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn37 = useScrollFadeIn("up", 0.8, 0.5);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      {/* 1. 왜 필요한가요 */}
      <Section $invert>
        <Container $invert $top>
          <CenterWrap>
            <H1 {...fadeIn1}>
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
          </CenterWrap>

          <div
            style={{
              textAlign: "center",
              maxWidth: 820,
              margin: "0 auto",
              display: "grid",
              gap: 12,
            }}
          >
            <P $invert {...fadeIn2}>
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
            <P $invert {...fadeIn3}>
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
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
              marginTop: 40,
            }}
          >
            <div style={{ display: "grid", gap: 32 }}>
              <SoftBox $invert {...fadeIn4}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 10px",
                    borderRadius: 8,
                    background: PINK,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    letterSpacing: "0.02em",
                    width: "fit-content",
                  }}
                >
                  1.
                </span>
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

              <SoftBox $invert {...fadeIn5}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 10px",
                    borderRadius: 8,
                    background: PINK,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    letterSpacing: "0.02em",
                    width: "fit-content",
                  }}
                >
                  2.
                </span>
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
          </div>
        </Container>
      </Section>

      {/* 2. 해결 방법 */}
      <Section $invert>
        <Container $invert>
          <H1 {...fadeIn6}>
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
            <div style={{ textAlign: "center" }}>
              <CenterDot {...fadeIn7}>01</CenterDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }} {...fadeIn8}>
                {lang === "ko"
                  ? "실질적 언어능력 향상"
                  : "Practical language gains"}
              </Sub>
              <P style={{ textAlign: "center" }} $invert {...fadeIn8}>
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

            <div>
              <CenterDot style={{ margin: "0 auto" }} {...fadeIn9}>
                02
              </CenterDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }} {...fadeIn10}>
                {lang === "ko"
                  ? "한국 적응 보조 & 일자리 연계"
                  : "Settlement support & job links"}
              </Sub>
              <P style={{ textAlign: "center" }} $invert {...fadeIn10}>
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

            <div>
              <CenterDot style={{ margin: "0 auto" }} {...fadeIn11}>
                03
              </CenterDot>
              <div style={{ height: 12 }} />
              <Sub style={{ textAlign: "center" }} {...fadeIn12}>
                {lang === "ko"
                  ? "글로벌 마케팅 & 로컬 브랜딩"
                  : "Global marketing & local branding"}
              </Sub>
              <P style={{ textAlign: "center" }} {...fadeIn12}>
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

      {/* 3. 추진 실적 */}
      <Section $invert>
        <Container $invert>
          <H1 $invert {...fadeIn13}>
            {lang === "ko" ? <span>추진 실적</span> : <span>Track Record</span>}
          </H1>

          <TrackWrap>
            <Stack>
              <SolidCard $invert {...fadeIn14}>
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
                  <HighlightChip>
                    {lang === "ko" ? "#결제편의" : "#EasyPayment"}
                  </HighlightChip>

                  <HighlightChip>
                    {lang === "ko" ? "#외국인친화" : "#ForeignerFriendly"}
                  </HighlightChip>

                  <HighlightChip>
                    {lang === "ko" ? "#커뮤니티연계" : "#CommunityLink"}
                  </HighlightChip>
                </HighlightBar>
              </SolidCard>

              <SolidCard $invert {...fadeIn15}>
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
                  <HighlightChip>
                    {lang === "ko" ? "#브랜딩" : "#Branding"}
                  </HighlightChip>

                  <HighlightChip>
                    {lang === "ko" ? "#온오프라인행사" : "#OnOffEvents"}
                  </HighlightChip>

                  <HighlightChip>
                    {lang === "ko" ? "#상생" : "#Coexistence"}
                  </HighlightChip>
                </HighlightBar>
              </SolidCard>
            </Stack>

            <div>
              <FeatureShowcase
                $src={wechat}
                aria-label="WeChat Pay 파트너 쇼케이스"
                {...fadeIn16}
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

      {/* 4. 대학/어학당 MOU & 상권 — 리디자인 */}
      <Section $invert>
        <Container $invert>
          <H1 $invert {...fadeIn17}>
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

          <MOUWrap>
            {/* 좌측 카드 스택 */}
            <MOUStack>
              <MOUCard $invert {...fadeIn18}>
                <Sub>
                  {lang === "ko"
                    ? "건국대학교 한국어학당 MOU 완료"
                    : "MOU with Konkuk University KLI"}
                </Sub>
                <MOUSubtle>
                  {lang === "ko"
                    ? "정식 협약 체결 및 교류 프로그램 설계"
                    : "Formal agreement and exchange program design"}
                </MOUSubtle>
                <StatRow>
                  <StatPill>
                    {lang === "ko" ? "한국어학당" : "Language Institute"}
                  </StatPill>
                  <StatPill>
                    {lang === "ko" ? "프로그램 설계 완료" : "Program Drafted"}
                  </StatPill>
                </StatRow>
              </MOUCard>

              <MOUCard $invert {...fadeIn19}>
                <Sub>
                  {lang === "ko"
                    ? "서울·부산 30개 어학당 협약 진행 중"
                    : "30 language institutes in progress"}
                </Sub>
                <MOUSubtle>
                  {lang === "ko"
                    ? "도시별 파트너 확대 및 커뮤니티 연계"
                    : "City-wide partner expansion & community linkage"}
                </MOUSubtle>
                <StatRow>
                  <StatPill>{lang === "ko" ? "서울" : "Seoul"}</StatPill>
                  <StatPill>{lang === "ko" ? "부산" : "Busan"}</StatPill>
                  <StatPill>
                    {lang === "ko" ? "+30 어학당" : "+30 Institutes"}
                  </StatPill>
                </StatRow>
              </MOUCard>

              <MOUCard $invert {...fadeIn20}>
                <Sub>
                  {lang === "ko"
                    ? "광안리 상권 제휴·할인 연동"
                    : "Gwangalli district partner discounts"}
                </Sub>
                <MOUSubtle>
                  {lang === "ko"
                    ? "커뮤니티 티켓 연동 10% 할인 합의"
                    : "Community ticket linked 10% off agreed"}
                </MOUSubtle>
                <HighlightBar>
                  <HighlightChip>
                    {lang === "ko" ? "#상권활성화" : "#MarketActivation"}
                  </HighlightChip>

                  <HighlightChip>
                    {lang === "ko" ? "#커뮤니티할인" : "#CommunityDiscount"}
                  </HighlightChip>
                </HighlightBar>
              </MOUCard>

              <ButtonCenter {...fadeIn21}>
                <Button onClick={() => scrollToSection("info")}>
                  {lang === "ko" ? "매장 찾아보기" : "Explore Partners"}
                </Button>
              </ButtonCenter>
            </MOUStack>

            {/* 우측 쇼케이스: sample1 한 장만 사용 */}
            <FeatureShowcase
              $src={sample1}
              aria-label="MOU & 상권 쇼케이스"
              {...fadeIn22}
            >
              <Ribbon>
                {lang === "ko" ? "Seoul · Busan MOU" : "Seoul · Busan MOUs"}
              </Ribbon>
              <Caption>
                {lang === "ko"
                  ? "어학당 네트워크 × 로컬 상권 연동"
                  : "Institute network × local commerce"}
              </Caption>
            </FeatureShowcase>
          </MOUWrap>
        </Container>
      </Section>

      {/* 5. 협업 시 기대효과 */}
      <Section $invert>
        <Container $invert>
          <H1 $invert {...fadeIn23}>
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
            <SoftBox $invert {...fadeIn24}>
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

            <SoftBox $invert {...fadeIn25}>
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

            <SoftBox $invert {...fadeIn26}>
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

      {/* 5.5. 커뮤니티 연결 & 할인 정보 섹션 — 리디자인 */}
      <Section $invert>
        <Container $invert>
          <CenterWrap>
            <H1 $invert style={{ textAlign: "center" }} {...fadeIn27}>
              {lang === "ko" ? (
                <>
                  다양한 정보 및 할인 혜택<span> 제공</span>
                </>
              ) : (
                <>
                  Local Tips & <span>Discounts</span>
                </>
              )}
            </H1>

            <LeadP $invert {...fadeIn28}>
              {lang === "ko" ? (
                <>
                  서울·부산에서 <b>로컬 친구 연결</b>과 <b>추천 장소·할인</b>을
                  한곳에서
                  <br className="mobile-br" />
                  여행 계획은 더 간단하게, 커뮤니티 관계는 더 오래
                </>
              ) : (
                <>
                  In Seoul and Busan, find <b>local friends</b> plus curated{" "}
                  <b>spots & discounts</b>—all in one place.
                  <br className="mobile-br" />
                  Plan smarter and build longer‑lasting community ties.
                </>
              )}
            </LeadP>
          </CenterWrap>

          {/* PC: 지도 | 아이콘 | 지도  /  Mobile: 지도 → 아이콘 → 지도 */}
          <CommunityRow style={{ marginTop: 28 }}>
            {/* 좌: 서울 */}
            <MapCard $invert {...fadeIn29}>
              <MapImage
                $src={seoulMap}
                aria-label={
                  lang === "ko" ? "서울 테두리 지도" : "Seoul outline map"
                }
              />
              <Sub style={{ marginTop: 4 }}>
                {lang === "ko" ? "서울 커뮤니티" : "Seoul Community"}
              </Sub>
              <P>
                {lang === "ko" ? (
                  <>
                    지역 친구와 정보 교류,
                    <br className="mobile-br" />
                    상권 할인 혜택 및 활동 기반 형성
                  </>
                ) : (
                  <>
                    Swap tips with locals,
                    <br className="mobile-br" />
                    unlock district discounts and activity hubs
                  </>
                )}
              </P>
            </MapCard>

            {/* 가운데: 아이콘 */}
            <IconCell {...fadeIn30}>
              <ExchangeIcon5
                aria-label={
                  lang === "ko"
                    ? "커뮤니티 연결 아이콘"
                    : "community exchange icon"
                }
              />
            </IconCell>

            {/* 우: 부산 */}
            <MapCard $invert {...fadeIn31}>
              <MapImage
                $src={busanMap}
                aria-label={
                  lang === "ko" ? "부산 테두리 지도" : "Busan outline map"
                }
              />
              <Sub style={{ marginTop: 4 }}>
                {lang === "ko" ? "부산 커뮤니티" : "Busan Community"}
              </Sub>
              <P>
                {lang === "ko" ? (
                  <>
                    여행 정보 공유 및 로컬 추천 장소 활성화,
                    <br className="mobile-br" />
                    교류를 통한 관계 지속
                  </>
                ) : (
                  <>
                    Share travel intel and activate local favorites,
                    <br className="mobile-br" />
                    sustaining relationships through ongoing exchange
                  </>
                )}
              </P>
            </MapCard>
          </CommunityRow>

          <P
            style={{
              marginTop: 12,
              textAlign: "center",
              color: PINK,
              fontWeight: 700,
            }}
            {...fadeIn32}
          >
            {lang === "ko"
              ? "100개 이상 추천 장소 & 할인 정보 공유 중"
              : "Sharing 100+ recommended spots & deals"}
          </P>
        </Container>
      </Section>

      {/* 6. 수요기업 한정 혜택 */}
      <Section $invert>
        <Container $invert>
          <H1 $invert {...fadeIn33}>
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

          <P {...fadeIn34}>
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
            <SoftBox $invert {...fadeIn35}>
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

            <UpgradeArrow {...fadeIn36}>
              {typeof window !== "undefined" && window.innerWidth > 768 ? (
                <FaArrowRight />
              ) : (
                <FaArrowDown />
              )}
            </UpgradeArrow>

            <SoftBox $invert {...fadeIn37}>
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
