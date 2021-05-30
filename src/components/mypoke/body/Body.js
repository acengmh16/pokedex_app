import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Card from './card/Card';
import {PokemonContext} from '../../../App';
import Datanotfound from '../../master/Datanotfound';
import { Link } from 'react-router-dom';


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
    
    return (
        <Wrapper>
            <CardWrapper>
                {
                    context.pokemon_nickname.length < 1 ? <Datanotfound />
                    :
                    context.pokemon_nickname.map(pokemon => 
                        
                        (
                            <Link key={pokemon.id} to={`/${pokemon.name}`} style={{width: '47%'}}>
                                <Card key={pokemon.id} context={context} item={pokemon} id={pokemon.id} name={pokemon.name} image={pokemon.image} nickname={pokemon.nickname}/>
                            </Link>
                        )
                    )
                    
                }
            </CardWrapper>  
        </Wrapper>
    );
}

export default Body;