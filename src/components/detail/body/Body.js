import React, {useContext, useEffect} from 'react';
import styled from '@emotion/styled';
import {PokemonContext} from '../../../App';
import Image from './Image';
import Catch from './Catch';
import Basics from './Basics';
import Loader from '../../master/Loader';
import Error from '../../master/Error';
import State from './State';
import Abilities from './Abilities';
import Moves from './Moves';

const Wrapper = styled.div`
    width: 100%;
`
function Body({params}) {
    
    const context = useContext(PokemonContext)

    useEffect(() => {
      context.setName(params.name) 
    }, [context.name])
    return (
        <Wrapper>
            {
                context.error_lists ?
                <Error />

                :
                context.loading_detail ? <Loader/>
                :
                <React.Fragment>
                    <Image sprites = {context.data_detail.pokemon.sprites} />
                    <Catch handler={context.catchPokemon} data={context.data_detail.pokemon}/>
                    <Basics name={context.data_detail.pokemon.name} 
                           types={context.data_detail.pokemon.types}
                    />
                    <State weight={parseFloat(context.data_detail.pokemon.weight * 0.1).toFixed(1)} height={parseFloat(context.data_detail.pokemon.height * 0.1).toFixed(1)} base={context.data_detail.pokemon.base_experience}/>
                    <Abilities abilities={context.data_detail.pokemon.abilities}/>
                    <Moves moves={context.data_detail.pokemon.moves}/>
                </React.Fragment>
            }
            
        </Wrapper>
    );
}

export default Body;