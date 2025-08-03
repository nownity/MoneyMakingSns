import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px;
  background-color: #0b1e3f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 100px;
  font-weight: bold;
  color: white;

  span {
    color: #ff2d95;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 1200px) {
    max-width: 800px;
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const CardText = styled.div`
  flex: 1;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ff2d95;
    margin-bottom: 5px;
  }

  p {
    color: #333;
    margin-bottom: 10px;
  }

  a {
    color: #ff2d95;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 250px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  svg {
    width: 50px;
    height: 50px;
    fill: #aaa;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const SampleSection = () => {
  return (
    <Section>
      <Heading>
        Sam<span>ple</span>
      </Heading>
      <CardGrid>
        <Card>
          <CardText>
            <h3>TITLE</h3>
            <p>문구</p>
            <a href="/">Try now</a>
          </CardText>
          <ImagePlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2zm-8-6 2.5 3H6l3.5-4.5 2.5 3 4.5-6L19 12h-6z" />
            </svg>
          </ImagePlaceholder>
        </Card>

        <Card>
          <CardText>
            <h3>TITLE</h3>
            <p>문구</p>
            <a href="/">Try now</a>
          </CardText>
          <ImagePlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2zm-8-6 2.5 3H6l3.5-4.5 2.5 3 4.5-6L19 12h-6z" />
            </svg>
          </ImagePlaceholder>
        </Card>

        <Card>
          <CardText>
            <h3>TITLE</h3>
            <p>문구</p>
            <a href="/">Try now</a>
          </CardText>
          <ImagePlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2zm-8-6 2.5 3H6l3.5-4.5 2.5 3 4.5-6L19 12h-6z" />
            </svg>
          </ImagePlaceholder>
        </Card>

        <Card>
          <CardText>
            <h3>TITLE</h3>
            <p>문구</p>
            <a href="/">Try now</a>
          </CardText>
          <ImagePlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2zm-8-6 2.5 3H6l3.5-4.5 2.5 3 4.5-6L19 12h-6z" />
            </svg>
          </ImagePlaceholder>
        </Card>
      </CardGrid>
    </Section>
  );
};

export default SampleSection;
