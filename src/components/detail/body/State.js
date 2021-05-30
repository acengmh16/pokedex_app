import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Stat = styled.div`
    display: flex;
    flex-direction: column;
    text-align: ${props => props.first ? 'left':'center'};
`
const Title = styled.span`
    color: rgb(146, 150, 171);
    font-size: 13px;
`
const Content = styled.span`
    color: var(--main-color);
    font-size: 13px;
    margin-top: 10px;
`
function State({weight, height, base}) {
    return (
        <Wrapper>
            <Stat first>
                <Title>Weight</Title>
                <Content>{weight} Kg</Content>
            </Stat>
            <Stat>
                <Title>Height</Title>
                <Content>{height} M</Content>
            </Stat>
            <Stat>
                <Title>Base XP</Title>
                <Content>{base}</Content>
            </Stat>
        </Wrapper>
    );
}

export default State;