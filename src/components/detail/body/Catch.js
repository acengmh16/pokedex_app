import React from 'react';
import styled from '@emotion/styled';
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`
const Button = styled.button`
    background: var(--main-color);
    padding: 9px 15px;
    font-family: s_regular;
    text-transform: capitalize;
    color: #fff;
    border-radius: 20px;
    outline: none;
    border: none;  
    font-size: 15px; 
`
function Catch({handler, data}) {

    return (
        <Wrapper>
            <Button onClick={() => handler(data)}>
                Catch {data.name}
            </Button>
        </Wrapper>
    );
}

export default Catch;