import React from 'react';
import styled from '@emotion/styled';
const Wrapper = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
function Loader(props) {
    return (
        <Wrapper>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </Wrapper>
    );
}

export default Loader;