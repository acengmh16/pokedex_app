import React from 'react';
import styled from '@emotion/styled';
import pokeball from '../../../assets/images/pokeball.svg';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`
const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Image = styled.img`
    width: 50%;
    margin-right: -6%;
`
const Title = styled.h2`
    font-family: s_bold;
    font-size: 30px;
    color: var(--main-color);
    margin-top: -40px;
`
const LinkStyle = {
    marginLeft: 'auto', 
    marginTop: '20px', 
    color: '#fff', 
    fontFamily: 's_regular',
    fontSize: '17px',
    textDecoration: 'none',
    background: 'var(--main-card)',
    padding: '5px 9px',
    borderRadius: '10px',
    boxShadow: '0px 5px 12px rgba(0,0,0,0.05)'
}
function Header(props) {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={pokeball}/>
            </ImageWrapper>
            <Title>
                Pokedex
            </Title>
            <Link style={LinkStyle} to='/my'>
                My Pokemons
            </Link>
        </Wrapper>
    );
}

export default Header;