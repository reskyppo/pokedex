import styled from "@emotion/styled";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import PokemonCard from "../components/PokemonCard";
import { useGetPokemonsList } from "../hooks/useGetPokemonsList";

type PokemonItem = {
  url: string;
  name: string;
  image: string;
};

const Home = () => {
  // get limit from localStorage, so user doesn't need to
  // load more when back from detail page
  const limitLS = JSON.parse(localStorage.getItem("pagination") || "20");
  const [limit, setLimit] = useState<number>(limitLS);

  const { data, loading } = useGetPokemonsList();
  if (loading) return <Loading />;
  const sliceData = data?.pokemons?.results?.slice(0, limit);
  const Container = styled.div`
    background-color: #fff;
    max-width: 640px;
    margin: auto;
    margin-bottom: 60px;
    padding: 1rem 0rem;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;
  const LoadMore = styled.div`
    width: 20rem;
    border: 1px solid #FFCC01;
    border-radius: 6px;
    text-align: center;
    margin: 0.5rem auto;
    cursor: pointer;
    padding: 0.5rem;
  `;

  return (
    <div>
      <Helmet>
        <title>Pokedex</title>
      </Helmet>
      <Container>
        <Grid>
          {sliceData?.map((result: PokemonItem, index: number) => (
            <PokemonCard
              key={index}
              name={result?.name}
              image={result?.image}
              url={result?.url}
            />
          ))}
        </Grid>
        {limit < 100 && (
          <LoadMore
            onClick={() => {
              setLimit(limit + 20);
              localStorage.setItem("pagination", JSON.stringify(limit + 20));
            }}
          >
            Load More
          </LoadMore>
        )}
        <Navigation isHome />
      </Container>
    </div>
  );
};

export default Home;
