import { gql } from '@apollo/client';
export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
            id
            url
            name
            image
        }
    }
    }
`;
export const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
            abilities{
                ability{
                    name
                }
                slot
            }
            moves{
                move{
                    name
                }
            }
            weight
            height
            base_experience
        }
    }
`;
