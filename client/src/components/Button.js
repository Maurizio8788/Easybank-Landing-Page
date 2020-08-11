import React from 'react';
import styled from 'styled-components'; 


const button = () => {

    const StyledButton = styled.button`
    background:linear-gradient( to right, #33d35e, #2AB6D9 );
    color:#fff;
    border:none;
    border-radius:22px;
    width:163px;
    height:44px;
    position:relative;

    &:focus{ outline:none; }

    &::before { border-radius:22px;opacity:.4;content:" ";display:block;position:absolute;top:0;left:0;min-width:0;min-height:0;background:#fff; transition:all .2s ease-in-out;}
    &:hover { 
        &::before{ min-width:100%;min-height:100%; }
    }

  
    `

    return(
        <StyledButton
        >Request Invite</StyledButton>
    )
}

export default button;