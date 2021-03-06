import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import PocketCard from "../components/PocketCard";

type Props = {};

const Pocket = (props: Props) => {
  const dataLS = JSON.parse(localStorage.getItem("prod") || "[]");

  const Container = styled.div`
    background-color: #fff;
    min-height: 100vh;
    max-width: 640px;
    margin: auto;
    margin-bottom: 20px;
    @media (min-width: 640px) {
      margin-bottom: 0;
    }
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
        {dataLS.length > 0 ? (
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
        ) : (
          <Loading
            msg="Oops! You didn't caught any pokemons yet."
            btnText="Find the pokemons"
          />
        )}
        <Navigation isPocket />
      </Container>
    </>
  );
};

export default Pocket;
