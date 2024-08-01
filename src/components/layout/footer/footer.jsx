import React from 'react'
import "./footer.css"
import img1 from "/src/assets/footer/ssl.png"
import img2 from "/src/assets/footer/gt.png"
import img4 from "/src/assets/footer/gamecare.png"
import img5 from "/src/assets/footer/18plus.png"

const Footer = () => {
  return (
    <footer>
      <div className='footer-1'>
        <div className='footerdata'>
          <h4>Terms and Conditions</h4>
          <h4>Responsible Gaming</h4>
        </div>
        <div>
          <h2>24X7 Support</h2>
        </div>
      </div>

      <div className='footer-2'>
        <div className='scureimg'>
          <img src={img1} alt="SSL" />
          <div className="ml-2 "><b>100% SAFE</b><div>Protected connection and encrypted data.</div></div>
        </div>
        <div className='otherfooterimg'>
          <img src={img2} alt="GT" />
          <img src={img4} alt="Gamecare" />
          <img src={img5} alt="18 Plus" />
        </div>
      </div>

      <div className='footer-3'>
        <p>© Copyright 2024. All Rights Reserved. Powered by ELEVENEXCH.</p>
      </div>
    </footer>
  )
}

export default Footer;
