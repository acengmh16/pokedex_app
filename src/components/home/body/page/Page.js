import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {PokemonContext} from '../../../../App';
import Error from '../../../master/Error';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
`
const Button = styled.button`
    background: var(--main-color);
    color: #fff;
    border: none;
    padding: 9px 14px;
    margin: 1%;
    font-family: s_regular;
    border-radius: 5px;
    box-shadow: 0px 5px 12px rgba(0,0,0,0.09);
    transition: 0.3s ease-out;
    cursor: pointer;
    font-size: 15px;
    outline: none;
    &hover: {
        box-shadow: 0px 2px 7px rgba(0,0,0,0.09); 
    }
`
function Page(props) {
    const context = useContext(PokemonContext)
    return (
        <Wrapper>
            {

                context.error_lists ?
                <Error />

                :
                context.loading_lists ? 
                    <Button disabled={true} style={{backgroundColor: 'var(--blur-color)'}}>
                    Prev
                    </Button>
                : 
                    context.data_lists.pokemons.previous === "" || context.data_lists.pokemons.previous === null ?
                        <Button disabled={true} style={{backgroundColor: 'var(--blur-color)'}}>
                        Prev
                        </Button>
                        :
                        <Button onClick={context.setListPrev}>
                        Prev
                        </Button>
            }
            {
                context.error_lists ?
                <Error />

                :
                context.loading_lists ? 
                    <Button disabled={true} style={{backgroundColor: 'var(--blur-color)'}}>
                    Next
                    </Button>
                : 
                    context.data_lists.pokemons.next === "" || context.data_lists.pokemons.next === null ?
                        <Button disabled={true} style={{backgroundColor: 'var(--blur-color)'}}>
                        Next
                        </Button>
                        :
                        <Button onClick={context.setListNext}>
                        Next
                        </Button>
            }
        </Wrapper>
    );
}

export default Page;