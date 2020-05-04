import React from 'react';
import "../styling/Nav.css";
import { StickyContainer, Sticky } from 'react-sticky';


const style = {
  top: 0,
  bottom: 0,
  
}

const Nav = () => {  
  return (
    <StickyContainer>
      <Sticky>
        {({style}) => (
            <header style={style}>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Attorney Profile</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Areas of Practice</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Results</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
        )}
      </Sticky>
    </StickyContainer>
  )
}


export default Nav;