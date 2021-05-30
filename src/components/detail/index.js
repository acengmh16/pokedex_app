import React from 'react';
import Header from './header/Header';
import styled from '@emotion/styled';
import Body from './body/Body';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    min-height: 100vh;
`

function Detail(props) {
    return (
        <Wrapper>
            <Header />
            <Body params={props.match.params}/>
        </Wrapper>
    );
}

export default Detail;