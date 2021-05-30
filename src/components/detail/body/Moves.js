import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column; 
   margin-top: 20px;
   margin-bottom: 20px;
`
const Title = styled.h2`
    color: #fff;
    font-size: 20px;
`
const MWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`
const Move = styled.div`
    display: flex;
    background: var(--main-card);
    padding: 10px;
    border-radius: 7px;
    font-size: 12px;
    margin-right: 10px;
    color: var(--main-color);
    align-items: center;
    margin-bottom: 5px;
    text-transform: capitalize;
    border: ${props => props.odd ? '2px solid #fff' : '2px solid var(--main-card)'}
`
function Moves({moves}) {
    return (
        <Wrapper>
            <Title>Moves</Title>
            <MWrapper>
                
                {
                    moves != null ?
                    moves.map((item, index) => (
                        <Move key={index}>
                            {item.move.name}
                        </Move>
                        
                    ))
                    :
                    null
                }
                
            </MWrapper>
        </Wrapper>
    );
}

export default Moves;