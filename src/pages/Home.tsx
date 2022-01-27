import styled from "@emotion/styled";
import { useState } from "react";

import PokemonCard from "../components/PokemonCard";
import { useGetPokemonsList } from "../hooks/useGetPokemonsList";

type PokemonItem = {
  url: string;
  name: string;
  image: string;
};

const Home = () => {
  const [limit, setLimit] = useState<number>(20);

  const { data } = useGetPokemonsList();
  const sliceData = data?.pokemons?.results?.slice(0, limit);
  const Container = styled.div`
    background-color: #fff;
    max-width: 640px;
    margin: auto;
    padding: 1rem 0rem;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;
  const LoadMore = styled.div`
    width: 20rem;
    border: 1px solid #f47340;
    border-radius: 6px;
    color: #f47340;
    text-align: center;
    margin: 0.5rem auto;
    cursor: pointer;
  `;

  return (
    <Container>
      <Grid>
        {sliceData?.map((result: PokemonItem) => (
          <PokemonCard
            name={result?.name}
            image={result?.image}
            url={result?.url}
          />
        ))}
      </Grid>
      {limit < 100 && (
        <LoadMore onClick={() => setLimit(limit + 20)}>
          <h4>Load More</h4>
        </LoadMore>
      )}
    </Container>
  );
};

export default Home;