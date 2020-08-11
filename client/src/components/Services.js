import React from 'react';
import Service from './Service/Service';

const services = (props) => {

    const services = props.services;

   
    return(     
            services.map( ( service ) => {

              const IMG = (imgName) => {
                return require(`../assets/images/${imgName}`)
              }

              return <Service 
              key={service.id} 
              imgSrc={IMG(service.icons)} 
              title={service.title} 
              content={service.content} />
            } )
        )
}

export default services;