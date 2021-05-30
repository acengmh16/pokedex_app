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
function Datanotfound(props) {
    return (
        <Wrapper>
            <Alert>Upps, No Pokemon Was Found, Go Catch One :)</Alert>
        </Wrapper>
    );
}

export default Datanotfound;