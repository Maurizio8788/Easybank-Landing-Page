import React from 'react';
import './Article.css';

const article = (props) => {

    return(
        <div className='col-xl-3 col-sm-12 col-md-6'>
            <div className='blog__card'>
                <img src={props.imgSrc} alt={props.title} />
                <div className='blog__text-container'>
                    <small>By {props.author}</small>
                    <h4>{props.title}</h4>
                    <p>{props.excerpt}</p>
                </div>
            </div>
        </div>
    )
}

export default article;