import React from 'react';
import styled from '@emotion/styled';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--main-card);
    width: 100%;
    border-radius: 30px;
    padding: 20px;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: 0px 9px 20px rgba(0,0,0,0.09);
    transition: .7s;
    &:hover{
        box-shadow: 0px 3px 12px rgba(0,0,0,0.09);
    };
`
const Name = styled.h4`
    font-family: s_bold;
    text-transform: capitalize;
    color: #fff;
    font-size: 19px;
    margin-bottom: 10px;
`
const Image = styled.img`
    height: 140px;
`
const Nickname = styled.p`
    color: var(--main-color);
    font-size: 13px;
    font-family: s_bold;
    display:flex;
    flex-direction: column;
    text-align: center;
`
const Nick = styled.span`
    color: ${props => props.nick ? 'var(--main-color)' : 'rgb(146, 150, 171)'};
    white-space: nowrap; 
    max-width: 90px; 
    overflow: hidden;
    text-overflow: ellipsis; 
` 
const Release = styled.button`
    background: var(--main-color);
    color: #fff;
    border-radius: 20px;
    padding: 7px 12px;
    outline: none;
    cursor: pointer;
    border: none;
    margin-top: 10px;
    font-family: s_bold;
`



function Card({context, id, item, name, image, nickname}) {
    return (
        <Wrapper>
            <Image src={image} />
            <Name>
                {name}
            </Name>
            <Nickname>
                {
                    nickname === '' ? <Nick>'No nick'</Nick> : <Nick nick>"{nickname}"</Nick> 
                }
            </Nickname>
            <Release onClick={(e) => context.releasePokemon(item, e)}>
                Release  
            </Release>
        </Wrapper>
    );
}

export default Card;