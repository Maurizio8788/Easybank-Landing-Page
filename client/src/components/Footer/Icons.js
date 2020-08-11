import React from 'react';
import styled from 'styled-components';



const icons = (props) => {
    const SingleIcon = styled.img`
    width:20px;
    height:20px;
    

    @media ( max-width:767px) {
        height:24px;
        width:24px;
    }

    
    `
        
    
    const Icons = props.src;
    return(
        Icons.map( (icon) => {

            return ( <SingleIcon src={icon} alt='Social Icon' />)
        } )
    )
}

export default icons; 