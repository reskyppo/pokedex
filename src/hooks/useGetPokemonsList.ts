import {gql,useQuery} from '@apollo/client';

const GET_POKEMONS_LIST = gql`
  query GetPokemonsList{
    pokemons(limit: 20, offset: 0) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`
export const useGetPokemonsList = () => {
  const result = useQuery(GET_POKEMONS_LIST)
  return result 
}