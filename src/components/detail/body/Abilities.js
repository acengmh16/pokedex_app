import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column; 
   margin-top: 20px;
`
const Title = styled.h2`
    color: #fff;
    font-size: 20px;
`
const ABWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`
const Ability = styled.div`
    display: flex;
    background: var(--main-card);
    padding: 10px;
    border-radius: 7px;
    font-size: 12px;
    margin-right: 10px;
    color: #fff;
    align-items: center;
    margin-bottom: 5px;
    text-transform: capitalize;
`
const Slot = styled.span`
    color: var(--main-color);
    margin-left: 5px;
`
function Abilities({abilities}) {
    return (
        <Wrapper>
            <Title>Abilities</Title>
            <ABWrapper>
                {
                    abilities != null ?
                    abilities.map((item, index) => (
                        <Ability key={index}>
                            {item.ability.name}
                            <Slot>{item.slot}</Slot>
                        </Ability>

                    ))
                    :
                    null
                }
                
            </ABWrapper>
        </Wrapper>
    );
}

export default Abilities;