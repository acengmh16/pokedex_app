import React from 'react';
import styled from '@emotion/styled';
const Wrapper = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
`
const Alert = styled.p`
    color: #8a8a8a;
    text-align: center;
    font-family: s_regular;
    font-size: 17px;
`
function Error(props) {
    return (
        <Wrapper>
            <Alert>Something when wrong !</Alert>
        </Wrapper>
    );
}

export default Error;