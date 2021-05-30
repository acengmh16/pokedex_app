import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    margin-top: 40px;
`
const Head = styled.h2`
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
    text-transform: capitalize;
`
const Type = styled.span`
    display: flex;
    padding: 4px 12px;
    background: transparent;
    border-radius: 30px;
    border: 2px solid var(--main-color);
    color: #fff;
    text-transform: capitalize;
    font-family: s_regular;
    font-size: 14px;
    margin-left: ${props => !props.first ? '5px' : ''}
`
function Basics({name, types}) {
    return (
        <Wrapper>
            <Head>{name}</Head>
            {
                types != null ?
                types.map((item, index) =>
                    index === 0 ? (<Type key={index} first>{item.type.name}</Type>) :  (<Type key={index}>{item.type.name}</Type>)
                )
                :
                ''
            }
        </Wrapper>
    );
}

export default Basics;