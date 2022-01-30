import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import PocketCard from "../components/PocketCard";

type Props = {};

const Pocket = (props: Props) => {
  const dataLS = JSON.parse(localStorage.getItem("test") || "[]");

  const Container = styled.div`
    background-color: #fff;
    min-height: 100vh;
    max-width: 640px;
    margin: auto;
    margin-bottom: 60px;
    padding: 1rem 0rem;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  return (
    <>
      <Helmet>
        <title>My Pocket - Pokedex</title>
      </Helmet>
      <Container>
        <Grid>
          {dataLS.map((data: any) => (
            <PocketCard
              name={data.name}
              image={data.sprites}
              username={data.username}
              types={data.types}
            />
          ))}
        </Grid>
        <Navigation />
      </Container>
    </>
  );
};

export default Pocket;
