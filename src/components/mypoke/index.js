import React from 'react';
import styled from '@emotion/styled';
import Header from './header/Header';
import Body from './body/Body';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    min-height: 100vh;
`


function My(props) {
    return (
        <Wrapper>
            <Header/>
            <Body/>
        </Wrapper>
    );
}

export default My;