import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import hero from "../images/LogoHPink.svg";
import hero1 from "../images/AboutM.png";
import hero2 from "../images/About2.jpg";
import hero3 from "../images/About3.jpg";

/* ========= Tokens ========= */
const PINK = "#ff2d95";
const TEXT_DARK = "#0f172a";
const TEXT_MUTED = "#475569";
const CARD_BORDER = "#eef1f6";
const CARD_SHADOW = "0 10px 28px rgba(10, 20, 50, 0.08)";

/* ========= Layout: Fullscreen Section & Slider ========= */
const Section = styled.section`
  width: 100%;
  height: 100vh; /* 전체 화면 */
  overflow: hidden;
  background: #fff; /* 화이트 유지 */
  position: relative;
`;

const SliderTrack = styled.div`
  height: 100%;
  display: flex;
  will-change: transform;
  transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
`;

const SlideBase = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  flex: 0 0 100vw;
  display: grid;
  place-items: center;
`;

/* ========= Inner Container ========= */
const Inner = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

/* ========= Common Typo ========= */
const Overline = styled.p`
  margin: 0 0 10px;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${TEXT_MUTED};
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: ${TEXT_DARK};
  span {
    color: ${PINK};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0 22px 22px 0;
  font-size: 1.1rem;
  color: ${TEXT_MUTED};
  font-style: italic;
`;

const BigBody = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.9;
  color: ${TEXT_DARK};
  max-width: 920px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

/* ========= Slide 1: Hero (강화 버전) ========= */
const Hero = styled(SlideBase)`
  place-items: stretch;
  background: #fff;
  color: ${TEXT_DARK}; /* 다크 텍스트 */
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;

  /* 이미지가 있으면 '흰 레이어'를 씌워 전체적으로 화이트 톤 유지 */
  ${({ src }) =>
    src
      ? `background-image:
           linear-gradient(0deg, rgba(255,255,255,0.92), rgba(255,255,255,0.92)),
           url(${src});
         background-size: cover;
         background-position: center;`
      : `background: #fff;`}
`;

const HeroContent = styled(Inner)`
  height: 100%;
  display: grid;
  align-content: center;
  gap: 18px;
  padding: 0 24px;
  color: #fff;
`;

/* 글래스 카드 */
const SoftPanel = styled.div`
  margin-top: 6px;
  width: fit-content;
  max-width: 920px;
  background: #fff;
  border: 1px solid ${CARD_BORDER};
  border-radius: 16px;
  padding: 18px 20px;
  box-shadow: ${CARD_SHADOW};
  color: ${TEXT_DARK};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* 키워드 칩 */
const Chips = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff0f6; /* 연핑크 배경 */
  border: 1px solid #ffd0e8; /* 연한 핑크 보더 */
  color: ${PINK};
  font-weight: 800;
  font-size: 0.92rem;
`;

/* ========= Slide 2: Tilt Card Image + Text ========= */
const SlideTwo = styled(SlideBase)`
  background: #fff;
`;

const TwoGrid = styled(Inner)`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  align-items: center;
  padding: 0 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TiltCard = styled.div`
  background: #fff;
  border: 1px solid ${CARD_BORDER};
  box-shadow: ${CARD_SHADOW};
  border-radius: 22px;
  padding: 14px;
  transform: rotate(-2.2deg);
  transition: transform 280ms ease;
  &:hover {
    transform: rotate(0deg) scale(1.01);
  }
`;

const TiltImg = styled.img`
  width: 100%;
  height: min(58vh, 520px);
  object-fit: cover;
  border-radius: 16px;
  display: block;
  @media (max-width: 768px) {
    height: min(30vh, 520px);
  }
`;

/* ========= Slide 3: Polaroid Stack + Text ========= */
const SlideThree = styled(SlideBase)`
  background: #fff;
`;

const ThreeGrid = styled(Inner)`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 36px;
  align-items: center;
  padding: 0 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Polaroids = styled.div`
  position: relative;
  height: min(60vh, 520px);
  @media (max-width: 992px) {
    height: min(50vh, 520px);
  }
  @media (max-width: 768px) {
    height: min(40vh, 520px);
  }
  @media (max-width: 500px) {
    height: min(30vh, 520px);
  }
`;

const Polaroid = styled.figure`
  position: absolute;
  width: 62%;
  max-width: 520px;
  background: #fff;
  border: 2px solid #d4af37; /* 황금 테두리 */
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(10, 20, 50, 0.12);
  padding: 10px 10px 36px;
  transform: ${({ $r }) => `rotate(${$r}deg)`};
  left: ${({ $l }) => $l}%;
  top: ${({ $t }) => $t}%;

  @media (max-width: 992px) {
    left: 50%;
    transform: ${({ $r }) => `translateX(-50%) rotate(${$r}deg)`};
  }
`;

const PolyImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 380px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

/* ========= Controls / Dots ========= */
const Controls = styled.div`
  position: absolute;
  top: 106px;
  right: 16px;
  z-index: 5;
  display: flex;
  gap: 8px;
`;

const IconBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${CARD_BORDER};
  background: #fff;
  box-shadow: 0 6px 16px rgba(10, 20, 50, 0.06);
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.98);
  }
  &:active {
    transform: translateY(1px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${TEXT_MUTED};
  }
`;

const Dots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? "28px" : "10px")};
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${CARD_BORDER};
  background: ${({ $active }) => ($active ? PINK : "#fff")};
  box-shadow: ${({ $active }) =>
    $active
      ? "0 6px 16px rgba(255,45,149,0.25)"
      : "0 2px 8px rgba(10,20,50,0.06)"};
  transition: all 200ms ease;
`;

const DEFAULT_IMAGES = { sb: hero, s1: hero1, s2: hero2, s3: hero3 };

/* ========= Component ========= */
const AboutFullscreenSlider = ({ lang, images = DEFAULT_IMAGES }) => {
  const t = useMemo(() => {
    if (lang === "ko") {
      return {
        overline: "about",
        title: (
          <>
            About <span>us</span>
          </>
        ),
        subtitle: `"Global Connection, Korean Experience"`,
        s1: "LanguageExchangeKorea는 외국인, 한국인과 소상공인이 상생하는 문화를 만듭니다.",
        s2: "우리는 언어 · 문화 · 지역 커뮤니티를 연결하는 플랫폼 기반의 사회혁신 기업입니다.",
        s3: "외국인 유학생과 한국인, 소상공인을 연결하는 커뮤니티를 통해 실용 언어 학습, 문화 교류, 로컬 브랜딩이라는 세가지 가치를 동시에 실현하고 있습니다.",
      };
    }
    return {
      overline: "about",
      title: (
        <>
          About <span>us</span>
        </>
      ),
      subtitle: `"Global Connection, Korean Experience"`,
      s1: "LanguageExchangeKorea fosters a culture of mutual growth among foreigners, Koreans, and small businesses.",
      s2: "We are a platform-based social innovation company connecting language, culture, and local communities.",
      s3: "Through our community, we realize three values at once: practical language learning, cultural exchange, and local branding.",
    };
  }, [lang]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n) => setIndex((n + 3) % 3), []);
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const pauseOn = () => setPaused(true);
  const pauseOff = () => setPaused(false);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // 터치 스와이프
  const startX = useRef(0);
  const deltaX = useRef(0);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    pauseOn();
  };
  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const th = 60;
    if (deltaX.current > th) prev();
    else if (deltaX.current < -th) next();
    pauseOff();
  };

  return (
    <Section
      aria-roledescription="carousel"
      aria-label="About carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={pauseOn}
      onMouseLeave={pauseOff}
      onFocus={pauseOn}
      onBlur={pauseOff}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Controls */}
      <Controls>
        <IconBtn
          aria-label={lang === "ko" ? "이전" : "Previous"}
          onClick={prev}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconBtn>
        <IconBtn
          aria-label={
            lang === "ko"
              ? paused
                ? "재생"
                : "일시정지"
              : paused
              ? "Play"
              : "Pause"
          }
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M8 5v14l11-7-11-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="6"
                y="5"
                width="4"
                height="14"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="14"
                y="5"
                width="4"
                height="14"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </IconBtn>
        <IconBtn aria-label={lang === "ko" ? "다음" : "Next"} onClick={next}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconBtn>
      </Controls>

      {/* Track */}
      <SliderTrack
        style={{ transform: `translate3d(-${index * 100}vw, 0, 0)` }}
      >
        {/* Slide 1: Hero (디자인 강화) */}
        <Hero>
          <HeroBg src={images.sb} />
          <HeroContent>
            <Overline>about</Overline>
            <Title as="h1">
              About <span>us</span>
            </Title>
            <Subtitle>"Global Connection, Korean Experience"</Subtitle>

            <SoftPanel>
              <p style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.8 }}>
                {t.s1}
              </p>
            </SoftPanel>

            <Chips>
              <Chip>{lang === "ko" ? "언어" : "Language"}</Chip>
              <Chip>{lang === "ko" ? "문화" : "Culture"}</Chip>
              <Chip>{lang === "ko" ? "로컬" : "Local"}</Chip>
            </Chips>
          </HeroContent>
        </Hero>

        {/* Slide 2: Tilt Image + Text */}
        <SlideTwo>
          <TwoGrid>
            <div>
              <Title>
                <span style={{ color: PINK }}>Mission</span>
              </Title>
              <Subtitle>"Global Connection, Korean Experience"</Subtitle>
              <BigBody>{t.s2}</BigBody>
            </div>
            <TiltCard>
              <TiltImg
                src={images.s1}
                alt="About image 2"
                onError={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg,#f8fafc,#eef2ff)`;
                }}
              />
            </TiltCard>
          </TwoGrid>
        </SlideTwo>

        {/* Slide 3: Polaroids + Text */}
        <SlideThree>
          <ThreeGrid>
            <Polaroids aria-hidden>
              <Polaroid $r={-6} $l={0} $t={6}>
                <PolyImg
                  src={images.s2}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg,#fff7fb,#f0f9ff)`;
                  }}
                />
              </Polaroid>
              <Polaroid $r={7} $l={28} $t={22}>
                <PolyImg
                  src={images.s3}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg,#f5f6f8,#eef1f6)`;
                  }}
                />
              </Polaroid>
            </Polaroids>
            <div>
              <Title>
                <span style={{ color: PINK }}>Values</span>
              </Title>
              <Subtitle>"Global Connection, Korean Experience"</Subtitle>
              <BigBody>{t.s3}</BigBody>
            </div>
          </ThreeGrid>
        </SlideThree>
      </SliderTrack>

      {/* Dots */}
      <Dots>
        {[0, 1, 2].map((i) => (
          <Dot
            key={i}
            $active={i === index}
            onClick={() => setIndex(i)}
            aria-label={lang === "ko" ? `${i + 1}번째` : `Slide ${i + 1}`}
          />
        ))}
      </Dots>
    </Section>
  );
};

export default AboutFullscreenSlider;
