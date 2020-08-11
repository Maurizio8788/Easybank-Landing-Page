import React, { Fragment, memo } from 'react';
import Button from '../components/Button';
import styled from 'styled-components'; 



const showcase = (props) => { 

    return (
        <Fragment>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <Button />
        </Fragment>
    )
}

export default memo(showcase);