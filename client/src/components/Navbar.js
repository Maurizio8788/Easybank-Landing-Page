import React,{memo} from 'react';
import styled from 'styled-components'; 

const navbar = (props) =>{

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


    @media (max-width:600px) {
      display:none;
    }

    @media ( min-width:768px) and (max-width:1024px) {
      display:none;
    }
    `
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between">
          <div className='container'>
            <img 
            className="navbar-brand" 
            src={props.logo}
            alt='Logo' />
            <button 
            className="navbar-toggler"
            type="button" 
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={props.click}>
              <img
              src={props.img}
              alt='Menu'
              id='hamb'/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Careers</a>
                </li>
              </ul>
            </div>
            <StyledButton
            >Request Invite</StyledButton>
          </div>
        </nav>
    )
}

export default memo(navbar);