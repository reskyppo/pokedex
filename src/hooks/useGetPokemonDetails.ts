import {gql,useQuery} from '@apollo/client';

const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!){
    pokemon(name: $name) {
      id
      name
      sprites{
        front_default
      }
      moves {
        move {
          name
          url
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`
export const useGetPokemonDetails = (name : string) => {
  const result = useQuery(GET_POKEMON_DETAILS, {
    variables: { name}
  })
  return result 
}