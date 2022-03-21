import React from 'react';
import styled, {keyframes} from 'styled-components';
const load = keyframes `
    to {
        transform: rotateZ(-360deg);
    }
`
const LoadWrapStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: grid;
    place-items: center;
    max-width: 100%;
`
const LoadStyled = styled.div`
    width: 5vmax;
    height: 5vmax;
    border-bottom: 5px solid rgb(110, 110, 110);
    border-radius: 50%;
    animation: ${load} 800ms linear infinite;
`
const Loader = () => {
    return (
        <>
        <LoadWrapStyled>
            <LoadStyled />
        </LoadWrapStyled>
        </>
    )
}

export default Loader
