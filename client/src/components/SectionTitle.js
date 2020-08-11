import React, { Fragment } from 'react';
import styled from 'styled-components'

const sectionTitle = (props) => {
    const Paragraph = styled.p`
    color:#9597A5;
    font-size:1.13rem;
    line-height:1.75em;
    width:58%;

    @media (max-width:767px){
        width:100%;
        font-size: .8125rem;
        line-height:1.5625em;
        letter-spacing:1px;
       }

    @media (min-width:768px) and (max-width:1024px) {
       width:100%;
    }

    `

    const subtitle =  (props.subtitle) ? <Paragraph>{props.subtitle}</Paragraph> : '';

    return (
        <Fragment>
            <h2 className='mb-4'>{ props.title}</h2>
            {subtitle}
        </Fragment>
    )
}

export default sectionTitle;