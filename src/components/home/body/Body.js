import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Card from './card/Card';
import Page from './page/Page';
import {PokemonContext} from '../../../App';
import Loader from '../../master/Loader';
import { Link } from 'react-router-dom';
import Error from '../../master/Error';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

function Body(props) {
    const context = useContext(PokemonContext);

    console.log(context);
    
    const getOwned = (name, p_owned) => {
        var owned = 0
        for(let i = 0; i < p_owned.length; i++){
            if(name === p_owned[i].name){
                owned =  p_owned[i].owned
                break
            }
        }
        return owned
    }
    return (
        <Wrapper>
            <CardWrapper>
                {
                    context.error_lists ?
                        <Error />
                        
                    :
                        context.loading_lists ? 
                        <Loader />
                        :
                        context.data_lists.pokemons.results.map(pokemon => 
                            
                            (
                                <Link key={pokemon.name} to={`/${pokemon.name}`} style={{width: '47%'}}>
                                    <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} owned={getOwned(pokemon.name, context.pokemon_owned)}/>
                                </Link>
                            )
                        )
                }
            </CardWrapper>  
            <Page />
        </Wrapper>
    );
}

export default Body;