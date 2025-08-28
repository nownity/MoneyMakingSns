import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

/* ========= 롤링 애니메이션 ========= */
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/* ========= 스타일드 컴포넌트 (상단 우선) ========= */
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  height: 150px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  span {
    color: #ff2d95;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a9a9a9;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  margin: 100px;
`;

const Slider = styled.div`
  display: inline-flex;
  animation: ${scroll} 100s linear infinite;
`;

const LogoBox = styled.div`
  flex: 0 0 auto;
  width: 220px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  background: #b4b4b4;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 900;
  font-size: 1.2rem;
`;

/* ====== 파트너 리스트 영역 ====== */
const PartnersSection = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 40px 30px 80px;
`;

const ControlsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1 1 320px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 0 14px;
  font-size: 0.95rem;
  outline: none;
  background: #d5d5d5;

  &:focus {
    border-color: #ff2d95;
    box-shadow: 0 0 0 3px rgba(255, 45, 149, 0.15);
  }
`;

const ResultCount = styled.div`
  font-size: 0.95rem;
  color: #a9a9a9;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #1f1f1f;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 150px;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  margin: 0 0 6px;
  color: #ffffff;
  letter-spacing: 0.2px;
`;

const CardAddress = styled.p`
  margin: 0 0 12px;
  color: #ffffff;
  font-size: 0.92rem;
  line-height: 1.45;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const GoButton = styled.a`
  height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  background: #ff2d95;
  color: #ffffff;

  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Pagination = styled.nav`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 22px;
  flex-wrap: wrap;
`;

const PageBtn = styled.button`
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => ($active ? "#ff2d95" : "#dcdcdc")};
  background: ${({ $active }) => ($active ? "#ffedf6" : "#fff")};
  color: ${({ $active }) => ($active ? "#ff2d95" : "#333")};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: #ff2d95;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

/* ========= 컴포넌트 ========= */
const InfoSection = ({ lang }) => {
  // 더미 데이터 (추후 관리자/DB 연동 예정)
  const partners = useMemo(
    () => [
      {
        name: "양산도 광안점",
        address: "부산 수영구 광안로 21 1층",
        url: "https://naver.me/FN7Zl5fo",
        googleUrl: "https://maps.app.goo.gl/Z9wXzidm3F5262zo9",
      },
      {
        name: "광안리해담",
        address: "부산 수영구 광안해변로344번길 17-5 9층 901호",
        url: "https://naver.me/GMPEcbgg",
        googleUrl: "https://maps.app.goo.gl/bmsCYTyX1zCn4ZwE8",
      },
      {
        name: "선릉마실길",
        address: "서울 강남구 선릉로 530 삼정빌딩 1층",
        url: "https://naver.me/xzxUzCPj",
        googleUrl: "https://maps.app.goo.gl/55Azg72D4ujYKNUz7",
      },
      {
        name: "유아뷰티풀네일",
        address: "서울 송파구 동남로 189 쌍용프라자 4층",
        url: "https://naver.me/GDLTxbzE",
        googleUrl: "https://maps.app.goo.gl/tiRS6ewEmN4oX9pZ8",
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return partners;
    return partners.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.address.toLowerCase().includes(q)
    );
  }, [partners, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const view = filtered.slice(start, start + pageSize);

  const goPage = (n) => setPage(Math.min(Math.max(n, 1), totalPages));

  return (
    <Section>
      <Heading>
        SER<span>VICE</span>
      </Heading>
      <Subtitle>
        {lang === "ko"
          ? "협력 업체 - 티켓 구매 시 협력사 제품·서비스 10% 할인 및 혜택 제공"
          : "Partner Discounts – 10% off and special perks with your ticket."}
      </Subtitle>
      <PartnersSection>
        <ControlsRow>
          <SearchInput
            placeholder={
              lang === "ko"
                ? "업체명 또는 주소 검색"
                : "Search by name or address"
            }
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
          <ResultCount>
            {lang === "ko"
              ? `총 ${filtered.length}곳 / 페이지 ${currentPage} / ${totalPages}`
              : `${filtered.length} places / Page ${currentPage} of ${totalPages}`}
          </ResultCount>
        </ControlsRow>

        <CardsGrid>
          {view.map((p, i) => (
            <Card key={`${p.name}-${i}`}>
              <CardTitle>{p.name}</CardTitle>
              <CardAddress>{p.address}</CardAddress>
              <Actions>
                <GoButton
                  href={p.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "ko" ? "구글 맵" : "to Google"}
                </GoButton>
                <GoButton
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "ko" ? "네이버 지도" : "to Naver"}
                </GoButton>
              </Actions>
            </Card>
          ))}
        </CardsGrid>

        <Pagination aria-label="페이지네이션">
          <PageBtn onClick={() => goPage(1)} disabled={currentPage === 1}>
            «
          </PageBtn>
          <PageBtn
            onClick={() => goPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </PageBtn>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, currentPage - 3),
              Math.max(0, currentPage - 3) + 5
            )
            .map((n) => (
              <PageBtn
                key={n}
                $active={n === currentPage}
                onClick={() => goPage(n)}
              >
                {n}
              </PageBtn>
            ))}
          <PageBtn
            onClick={() => goPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </PageBtn>
          <PageBtn
            onClick={() => goPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </PageBtn>
        </Pagination>
      </PartnersSection>

      <SliderWrapper>
        <Slider>
          {[
            "NOWMAKES",
            "양산도",
            "광안리해담",
            "선릉마실길",
            "유아뷰티풀",
            "MoneyMakingSns",
          ]
            .concat([
              "NOWMAKES",
              "양산도",
              "광안리해담",
              "선릉마실길",
              "유아뷰티풀",
              "MoneyMakingSns",
            ])
            .map((logo, idx) => (
              <LogoBox key={idx}>{logo}</LogoBox>
            ))}
        </Slider>
      </SliderWrapper>
    </Section>
  );
};

export default InfoSection;
