import { useGetPokemonsList } from "../hooks/useGetPokemonsList";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useGetPokemonsList();
  const Container = styled.div`
    width: 100vw;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;
  const Card = styled.div`
    margin: 0.5rem;
    text-align: center;
  `;

  const Title = styled.h4`
    text-decoration: none;
  `;
  return (
    <Container>
      <h3>home page</h3>
      <Grid>
        {data?.pokemons?.results?.map((result: any) => (
          <Card>
            <Link to={`detail/${result?.name}`}>
              <img src={result?.image} alt={result?.name} />
              <Title>{result?.name}</Title>
              <p>owned: 0</p>
            </Link>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
