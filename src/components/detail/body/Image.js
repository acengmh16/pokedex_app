import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 60%;
`
function Image({sprites}) {

    return (
        <Wrapper>
            {
                sprites != null ?
                <Img src={sprites.front_default}/>
                :
                null
            }
            
        </Wrapper>
    );
}

export default Image;