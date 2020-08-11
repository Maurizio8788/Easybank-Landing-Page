import React from 'react';
import Article from '../components/Article/Article';


const articles = (props) => {
    
    const articles = props.articles;
    const IMG = (imgName) => {
        return require(`../assets/images/${imgName}`)
      }

    return (
        articles.map( (article) => {
         return <Article
                key={article.id}
                imgSrc={ IMG(article.image) } 
                author={article.author} 
                title={article.title} 
                excerpt={article.excerpt} />
        })
    )
}

export default articles;