import React from 'react'
import "./Footer.css";

import logo from "../../assets/Wf2.jpg";


function Footer() {
  return (
    <footer>
  <div className="row footer__row">
  <a href="#" className="footer__anchor">
    <figure className="footer__logo">
      <img src={logo} className="footer__logo--img" alt=""></img>
    </figure>
    <span className="footer__logo--popper">
      Top <i className="fas fa-arrow-up"></i>
    </span>
  </a>
  {/* <div className="footer__social--list">
    <p className='link__hover-effect footer__social--link'>Social</p>    
    <p className='link__hover-effect footer__social--link'>Social</p>    
    <p className='link__hover-effect footer__social--link'>Social</p>    
  </div> */}
  <div className="footer__copyright">Copyright © WebForte</div>
  {/* <div className="footer__copyright">Copyright © 2021 </div> */}
</div>
</footer>
  )
}

export default Footer