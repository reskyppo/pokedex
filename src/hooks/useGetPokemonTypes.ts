import {gql,useQuery} from '@apollo/client';

const GET_POKEMON_TYPE = gql`
  query GetPokemonTypes($name: String!){
    pokemon(name: $name) {
      types {
        type {
          name
        }
      }
    }
  }
`
export const useGetPokemonTypes = (name: string) => {
  const result = useQuery(GET_POKEMON_TYPE, {
    variables: { name}
  })
  return result 
}