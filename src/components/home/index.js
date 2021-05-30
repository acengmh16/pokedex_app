import React from 'react';
import styled from '@emotion/styled';

import Header from './header/Header';
import Body from './body/Body';

const Wrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    width: 90%;
`


function Home(props) {
    return (
        <Wrapper>
            <Header/>
            <Body/>
        </Wrapper>
    );
}

export default Home;