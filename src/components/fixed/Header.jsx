import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fixed.scss';
import CheckboxHambur from '../checkboxes/CheckboxHambur/CheckboxHambur';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <h1 id='h1' className="UseComponents  navbar__logo">UseComponents</h1>
        </Link>
        <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to={'/listButtons'} className="navbar__link" onClick={handleToggleMenu}>BUTTONS</Link>
            </li>
            <li className="navbar__item">
              <Link to={'/listCards'} className="navbar__link" onClick={handleToggleMenu}>CARDS</Link>
            </li>
            <li className="navbar__item">
              <Link to={'/listCheckboxes'} className="navbar__link" onClick={handleToggleMenu}>CHECKBOXES</Link>
            </li>
            <li className="navbar__item">
              <Link to={'/listInputs'} className="navbar__link" onClick={handleToggleMenu}>INPUTS</Link>
            </li>
            <li className="navbar__item">
              <Link to={'/listLoaders'} className="navbar__link" onClick={handleToggleMenu}>LOADERS</Link>
            </li>
            <li className="navbar__item">
              <Link to={'/listToggles'} className="navbar__link" onClick={handleToggleMenu}>TOGGLES</Link>
            </li>
            {/* <li className="navbar__item">
              <Link to={'/listRadios'} className="navbar__link" onClick={handleToggleMenu}>RADIO-BTNS</Link>
            </li> */}
          </ul>
        </div>
        <button className={`navbar__toggle ${isOpen ? 'active' : ''}`} onClick={handleToggleMenu}>
          <span className="navbar__icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;

// import React from 'react';
// import './Fixed.scss';
// import { Link } from "react-router-dom";


// const Header = () => {

//   (function(){

//     var button = document.getElementById('cn-button'),
//       wrapper = document.getElementById('cn-wrapper');
  
//       //open and close menu when the button is clicked
//     var open = false;
//     button.addEventListener('click', handler, false);
//     button.addEventListener('focus', handler, false);
  
//     function handler(){
//       if(!open){
//         this.innerHTML = "Close";
//         classie.add(wrapper, 'opened-nav');
//       }
//       else{
//         this.innerHTML = "Menu";
//       classie.remove(wrapper, 'opened-nav');
//       }
//       open = !open;
//     }
//     function closeWrapper(){
//       classie.remove(wrapper, 'opened-nav');
//     }
  
//   })();
//   return (
//     <>
//     <button class="cn-button" id="cn-button">+</button>
// <div class="cn-wrapper" id="cn-wrapper">
//    <ul>
//        <li><a href="#"><span class="icon-picture"></span></a></li>
//        <li><a href="#"><span class="icon-headphones"></span></a></li>
//        <li><a href="#"><span class="icon-home"></span></a></li>
//        <li><a href="#"><span class="icon-facetime-video"></span></a></li>
//        <li><a href="#"><span class="icon-envelope-alt"></span></a></li>
//    </ul>
// </div>
// <div id="cn-overlay" class="cn-overlay"></div>
// </>
//   )
// }

// export default Header;
