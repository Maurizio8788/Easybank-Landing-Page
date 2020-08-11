import React from 'react';
import styled from 'styled-components';


const service = (props) => {
    const Paragraph = styled.p`
    color:#9597A5;
    font-size:1rem;
    line-height:1.6em;

    @media (max-width:767px){
        width:100%;
        font-size: .8125rem;
        line-height:1.5625em;
        letter-spacing:1px;
       }
    
    `

    const heading_style = {
        color:'#2D314D'
    }
    
    return (
        <div className='col-xl-3 col-sm-12 col-md-6 my-5'>
            <div className="service__card">
                <img src={props.imgSrc} alt="Servizi" className='mb-5' /> 
                <h4 className="mb-4" style={heading_style}>{props.title}</h4>
                <Paragraph>{props.content}</Paragraph>
            </div>
        </div>
    )
}

export default service;