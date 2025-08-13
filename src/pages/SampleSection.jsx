import React from "react";
import styled from "styled-components";

/* ===== 색상 토큰 (BLUE 제거) ===== */
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

/* $invert=true 이면 네이비 배경 + 흰 글자, false면 화이트 배경 + 다크 글자 */
const Section = styled.section`
  width: 100%;
  background: ${({ $invert }) => ($invert ? NAVY : WHITE)};
  color: ${({ $invert }) => ($invert ? "#fff" : TEXT_DARK)};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* 섹션 높이 동일하게 */
  min-height: ${({ $invert }) => ($invert ? "80vh" : "92vh")};
  display: grid;
  align-content: center; /* 수직 가운데 */
  gap: 28px;
  padding: 96px 20px;

  @media (max-width: 768px) {
    min-height: 92vh;
    padding: 72px 30px;
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

  @media (max-width: 768px) {
    font-size: 2rem;
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
`;

const P = styled.p`
  font-size: 1.06rem;
  color: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.85)" : TEXT_MUTED)};
  line-height: 1.75;
  margin: 0;
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

/* ===== 단색 아이콘/넘버 ===== */
const Circle = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 999px;
  background: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.1)" : GRAY_BG)};
  display: grid;
  place-items: center;
  color: ${({ $invert }) => ($invert ? "#fff" : TEXT_MUTED)};
  font-weight: 900;
  box-shadow: ${({ $invert }) => ($invert ? "none" : CARD_SHADOW)};
`;

const NumberDot = styled(Circle)`
  width: 72px;
  height: 72px;
  color: #fff;
  background: ${PINK};
  box-shadow: 0 10px 32px rgba(255, 45, 149, 0.25);
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
  background: ${({ $invert }) =>
    $invert ? "rgba(255,255,255,0.06)" : GRAY_BG};
  display: grid;
  place-items: center;
  font-weight: 800;
  color: ${({ $invert }) => ($invert ? "rgba(255,255,255,0.7)" : TEXT_MUTED)};
  box-shadow: ${({ $invert }) => ($invert ? "none" : CARD_SHADOW)};
`;

/* ===== 페이지 구성 ===== */
const SampleSection = () => {
  return (
    <Page>
      {/* 1. 왜 필요한가요 (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            이 커뮤니티, <span>왜 필요한가요?</span>
          </H1>
          <Grid2>
            <div>
              <P $invert>
                이미 외국인과 한국인 소통 커뮤니티도 있고, 언어교환 플랫폼도
                존재합니다. 하지만{" "}
                <b>실생활에 쓰일 언어 능력에 도움이 되지 않고</b> 지속적인 소통
                기회가 부족합니다.
              </P>
              <P $invert>
                외국인 유학생 및 여행객이 증가하지만{" "}
                <b>소상공인은 내수경기 불황으로 매출 감소</b>를 겪고 있습니다.
              </P>
              <ImageBox $invert>커버 히어로 이미지 자리</ImageBox>
            </div>

            <SoftBox $invert>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: 16,
                }}
              >
                <Circle $invert>ENG</Circle>
                <div>
                  <Sub>
                    성인 영어 교육 및 <span>외국인의 한국 적응 한계</span>
                  </Sub>
                  <P $invert>
                    한국식 영어교육은 글로벌 시장에서 바로 도움 되기 어렵습니다.
                    방한 외국인은 늘지만 생활 적응과 친구 사귈 기회는
                    부족합니다.
                  </P>
                </div>
              </div>

              <div style={{ height: 18 }} />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: 16,
                }}
              >
                <Circle $invert>SMB</Circle>
                <div>
                  <Sub>
                    소상공인의 <span>지속적인 매출 하락</span>
                  </Sub>
                  <P $invert>
                    외국인 수요와 지역 상권이 제대로 연결되지 못합니다.{" "}
                    <b>로컬 브랜딩/세일즈</b>가 필요합니다.
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
            우리는 <span>이렇게 해결합니다.</span>
          </H1>
          <P>
            외국인 유학생, 한국인, 소상공인이 함께 성장하는 언어교환 커뮤니티를
            개발해
            <b> 선순환 구조</b>를 구축합니다.
          </P>

          <Grid3>
            <SoftBox>
              <NumberDot>01</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>실질적 언어능력 향상</Sub>
              <P>
                한국인–외국인 간 언어 교환으로 <b>실생활 외국어</b> 학습 효과를
                극대화합니다.
              </P>
            </SoftBox>

            <SoftBox>
              <NumberDot>02</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>한국 적응 보조 & 일자리 연계</Sub>
              <P>
                문화 교류 통해 외국인의 한국 적응도를 높이고, 검증된 인재 채용
                기회를 제공합니다.
              </P>
            </SoftBox>

            <SoftBox>
              <NumberDot>03</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>글로벌 마케팅 & 로컬 브랜딩</Sub>
              <P>
                커뮤니티 공간·콘텐츠·세일즈로 <b>매출 증대</b>를 연결합니다.
              </P>
            </SoftBox>
          </Grid3>
        </Container>
      </Section>

      {/* 3. 추진 실적(협찬/결제) (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            <span>추진 실적</span>
          </H1>
          <Grid2>
            <div>
              <SoftBox $invert>
                <Sub>WeChat Pay 한국 파트너사 등록 완료</Sub>
                <P $invert>
                  부산 커뮤니티 제휴처에 위챗페이 도입 → 외국인에게{" "}
                  <b>편리한 결제 환경</b> 제공.
                </P>
              </SoftBox>

              <div style={{ height: 16 }} />

              <SoftBox $invert>
                <Sub>행사 진행 협찬사 네트워크 확보</Sub>
                <P $invert>주류/행사 물품 협찬 파트너 지속 확장 중입니다.</P>
              </SoftBox>
            </div>

            <ImageBox $invert>현장 사진 / 결제 단말 클로즈업</ImageBox>
          </Grid2>
        </Container>
      </Section>

      {/* 4. 대학/어학당 MOU & 상권 (화이트) */}
      <Section>
        <Container>
          <H1>
            서울·부산 내 대학 및 어학당 <span>MOU</span>
          </H1>
          <P>
            세종·고려·한양·국민·성균관·이화·인하 등 다수 어학당과 협력 추진 중.
          </P>

          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gap: 12,
              marginTop: 16,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <SoftBox
                key={i}
                style={{ height: 66, display: "grid", placeItems: "center" }}
              >
                학교 로고
              </SoftBox>
            ))}
          </div> */}

          <Grid2 style={{ marginTop: 24 }}>
            <div>
              <Sub>부산 내 한국어 교육센터 및 소상공인 협약 진행</Sub>
              <P>
                광안리 상권 중심 업종(음식점·펜션·바 등) 미팅 완료.{" "}
                <b>커뮤니티 티켓 구매 시 10% 할인</b> 협의 완료.
              </P>
            </div>
            <SoftBox>
              <ImageBox style={{ minHeight: 280, boxShadow: "none" }}>
                구글 지도/상권 맵 캡처
              </ImageBox>
            </SoftBox>
          </Grid2>
        </Container>
      </Section>

      {/* 5. 협업 시 기대효과 (네이비) */}
      <Section $invert>
        <Container $invert>
          <H1>
            협업 시 <span>기대효과</span>
          </H1>
          <Grid3>
            <SoftBox $invert>
              <NumberDot>01</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>해외 마케팅 대행</Sub>
              <P $invert>
                체험 기반으로 제품을 직접 노출, 해외 진출 없이도{" "}
                <b>글로벌 반응</b> 확보.
              </P>
            </SoftBox>

            <SoftBox $invert>
              <NumberDot>02</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>외국인 인재 채용 기회</Sub>
              <P $invert>
                커뮤니티를 통해 검증된 인재를 연결, 효율적·안정적 채용.
              </P>
            </SoftBox>

            <SoftBox $invert>
              <NumberDot>03</NumberDot>
              <div style={{ height: 10 }} />
              <Sub>정보/할인 혜택 제공</Sub>
              <P $invert>
                티켓 구매 시 협업사 할인 제공으로 상권 매출 증대와{" "}
                <b>핵심 고객</b> 확보.
              </P>
            </SoftBox>
          </Grid3>
        </Container>
      </Section>

      {/* 6. 수요기업 한정 혜택 (화이트) */}
      <Section>
        <Container>
          <H1>
            수요기업 참여·선정 시 <span>한정 혜택!</span>
          </H1>
          <P>
            선정 기업에만 제공되는 <b>한정 마케팅 2배 적용 이벤트</b>.
          </P>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 12,
            }}
          >
            <SoftBox>
              <Sub>기존 마케팅 상품</Sub>
              <ul style={{ margin: "10px 0 0 18px" }}>
                <li>
                  후기 영상 콘텐츠 <b style={{ color: PINK }}>3건</b> 기획/배포
                </li>
                <li>
                  별점 및 리뷰 <b style={{ color: PINK }}>3건</b> 작성
                </li>
                <li>외국인 매출 성장 1년 패키지 / 커뮤니티 초대권 연 6회</li>
                <li>SNS 바이럴 월 2건 / 구글 리뷰 다국어 연 2건</li>
                <li>매출 발생 보장(미발생 시 전액 환불)</li>
              </ul>
            </SoftBox>

            <SoftBox>
              <Sub>참여/선정 시 적용 상품</Sub>
              <ul style={{ margin: "10px 0 0 18px" }}>
                <li>
                  후기 영상 콘텐츠 <b style={{ color: PINK }}>6건</b> 기획/배포
                </li>
                <li>
                  별점 및 리뷰 <b style={{ color: PINK }}>6건</b> 작성
                </li>
                <li>
                  커뮤니티 초대권 <b style={{ color: PINK }}>연 12회</b>
                </li>
                <li>
                  SNS 바이럴 <b style={{ color: PINK }}>월 4건</b> / 구글 리뷰
                  다국어 <b style={{ color: PINK }}>연 4건</b>
                </li>
                <li>매출 발생 보장(미발생 시 전액 환불)</li>
              </ul>
              <div
                style={{
                  textAlign: "center",
                  color: PINK,
                  fontWeight: 900,
                  marginTop: 10,
                }}
              >
                ← 2배 적용
              </div>
            </SoftBox>
          </div>
        </Container>
      </Section>
    </Page>
  );
};

export default SampleSection;
