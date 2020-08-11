import React from 'react';
import Row from '../../Hoc/Row';
import Container from '../../Hoc/container';
import Button from '../Button';
import Icon from './Icons';
import Logo from '../../assets/images/logo-footer.svg';
import styled from 'styled-components';
import Facebook from '../../assets/images/icon-facebook.svg';
import YouTube from '../../assets/images/icon-youtube.svg';
import Twitter from '../../assets/images/icon-twitter.svg';
import Pinterest from '../../assets/images/icon-pinterest.svg';
import Instagram from '../../assets/images/icon-instagram.svg';
import '../Footer/Footer.css';

const footer = () => {

    const Icons = [Facebook, YouTube, Twitter, Pinterest, Instagram];

    const Footer = styled.footer`

    width:100%;
    height:191px;
    background:#2D314D;
    color:#fff;
    
    

    @media ( max-width:767px) {
        height:auto;
        margin: 0 auto;
        text-align:center;
    }
    

    @media (min-width:768px) and (max-width:1024px) {
        height:auto;
        text-align:center;
    }
    `



    return(
        <Footer>
        <Container>
          <Row>

              <div className='col-xl-3 col-sm-12 col-md-6 mt-5'>
                  <Row>

                      <div className='col-12'>
                          <img src={Logo} alt='Logo' />
                      </div>
                      <div className='col-12 mt-5 d-flex justify-content-between'>
                            <Icon src={Icons} />
                      </div>

                  </Row>
              </div>

              <div className='col-xl-2 col-sm-12 col-md-6 mt-5'>

                  <ul>
                      <li><a href='#'>About us</a></li>
                      <li><a href='#'>Contact</a></li>
                      <li><a href='#'>Blog</a></li>
                  </ul>

              </div>

              <div className='col-xl-2 col-sm-12 col-md-6 mt-5'>

                  <ul>
                      <li><a href='#'>Careers</a></li>
                      <li><a href='#'>Support</a></li>
                      <li><a href='#'>Privacy Policy</a></li>
                  </ul>

              </div>

              <div className='col-xl-5 col-sm-12 col-md-6 d-flex flex-column align-items-xl-end align-items-center mt-5'>

                  <Button />
                  <p className='mt-4'>© Easybank. All Rights Reserved</p>

              </div>
            
          </Row>
        </Container>
      </Footer>
    )
}

export default footer;
