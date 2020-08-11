import React, { Fragment, useEffect, useState  } from 'react';
import styled from 'styled-components';

/* Logo e Immagini */

import Logo from '../assets/images/logo.svg';
import Menu from '../assets/images/icon-hamburger.svg';
import MenuClose from '../assets/images/icon-close.svg';
import Cellphone from '../assets/images/image-mockups.png';
import bgDesktop from '../assets/images/bg-intro-desktop.svg';
import bgMobile from '../assets/images/bg-intro-mobile.svg';

/* Componenti */

import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import SectionTitle from '../components/SectionTitle';
import Row from '../Hoc/Row';
import Container from '../Hoc/container';
import Services from '../components/Services';
import Articles from '../components/Articles';
import Footer from '../components/Footer/Footer'
import './App.css';

function App() {  

  /**
   * 
   * useState Hooks
   * 
   */

  const [ openHamburger, setOpenHamburger ] = useState(false);
  const [ imgHamb, setImgHamb ] = useState(Menu);
  const [ header, setHeader ] = useState({});
  const [ services, setServices] = useState([]);
  const [ articles, setArticles ] = useState([]);


  /**
   * 
   * Style-components
   * 
   * 
   */

   const ServicesSection = styled.section`
   
   padding: 5% 0 9%;
   height:676px;
   background:#F4F5F7;
   position:relative;
   z-index:-2;

   @media (max-width:767px){
    height:auto;
    text-align:center;
    padding:16% 0;
   }

   @media (min-width:768px) and (max-width:1024px){
     height:auto;
     text-align:center;
   }
   
   `

   /**
   * 
   * useEffect Hooks
   * 
   * 
   */

  useEffect( () => {
    fetch('/api/easybank')
    .then( res => res.json() )
    .then( data => setHeader({...data.header}) )
  }, [] );

  useEffect( () => {
    fetch('/api/easybank')
    .then( res => res.json() )
    .then( data => setServices([...data.servizi]) )
  }, [] );

  useEffect( () => {
    fetch('/api/easybank')
    .then( res => res.json() )
    .then( data => setArticles([...data.blog]) )
  }, [] );


/**
   * 
   * Handlers
   * 
   * 
   */

  const openMenu = () =>{
    const hamb = document.querySelector('#hamb');
    let change = openHamburger
    setOpenHamburger(!change);

    if(change === true){
      setImgHamb(Menu);
      hamb.setAttribute('src', imgHamb );
    }else{
      setImgHamb(MenuClose);
      hamb.setAttribute('src', imgHamb );
    }
     
  }

  /**
   * 
   * Render
   * 
   * 
   */

  return (
    <Fragment>
      <header>
       <Navbar 
       click={openMenu}
       img={imgHamb}
       logo={Logo}
       />

       <div className='container showcase'>
         <Row>
           <div className='col-xl-6 col-sm-12 col-md-12 d-flex flex-column justify-content-center'>
            <Showcase 
              title={header.title} 
              subtitle={header.subtitle} 
            />
           </div>
           <div className='col-xl-6 col-sm-12 col-md-12 position-relative'>
             <picture>
               <source media="(min-width:768px)" srcset={bgDesktop} className='position-absolute showcase__background' />
               <source media="(min-width:320px)" srcset={bgMobile} className='position-absolute showcase__background' />
               <img src={bgDesktop} alt='sfondo' className='position-absolute showcase__background' />
             </picture>

             <img 
             className='position-relative showcase__cellphone'
             src={Cellphone} 
             alt='Background' 
             /> 

           </div>
         </Row>
       </div>
      </header>
      <main>
        <ServicesSection>
          <Container>
            <SectionTitle title="Why Choose Easybank" subtitle="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before." /> 
            <Row>
              <Services services={services} />
            </Row>
          </Container>
        </ServicesSection>
        <section className='blog'>
          <Container>
            <SectionTitle title='Latest Articles' />
            <Row>
              <Articles articles={articles} />
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
