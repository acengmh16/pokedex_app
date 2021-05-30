import React from 'react';
import styled from '@emotion/styled';
import Back from '../../../assets/images/back.svg';
import Pokeball from '../../../assets/images/pokeball.svg';
import { withRouter } from 'react-router-dom';
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
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
function Header(props) {
    return (
        <Wrapper>
            <ImageWrapper>
                <ImageBack src={Back} onClick={() => props.history.goBack()} />
                <Image src={Pokeball}/>
            </ImageWrapper>
        </Wrapper>
    );
}

export default withRouter(Header);