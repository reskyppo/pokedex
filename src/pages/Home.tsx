import { useGetPokemonsList } from "../hooks/useGetPokemonsList";
type Props = {};

const Home = (props: Props) => {
  const { data, loading, error } = useGetPokemonsList();
  console.log("data", data.pokemons);
  return (
    <div>
      <h3>home page</h3>
      {data?.pokemons?.results?.map((result: any) => (
        <div>
          <img src={result?.image} alt={result?.name} />
          <p>{result?.name}</p>
          <p>owned: 0</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
