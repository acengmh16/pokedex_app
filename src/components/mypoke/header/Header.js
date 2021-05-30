import React from 'react';
import styled from '@emotion/styled';
import Back from '../../../assets/images/back.svg';
import pokeball from '../../../assets/images/pokeball.svg';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`
const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    width: 100%;
`
const Image = styled.img`
    width: 50%;
    margin-right: -6%;
`
const ImageBack = styled.img `
    height: 30px;
    margin-top: 7vh;
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
                <ImageBack src={Back} onClick={() => props.history.goBack()} />
                <Image src={pokeball}/>
            </ImageWrapper>
            <Title>
                My Pokemons
            </Title>
            <Link style={LinkStyle} to='/'>
                Pokedex
            </Link>
        </Wrapper>
    );
}

export default withRouter(Header);