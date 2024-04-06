import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='FooterBody'>
        <div className='FooterWrapper'>
            <div className='FooterHeader'>
                <div className='FooterAddyDiv'>
                    <div className='FooterAddy'>
                        <p>
                        5th flora, 700/D kings road, 
                        greenlane New
                        York-1782+10 367 826 2567
                        contact@carpenter.com
                        </p>
                    </div>
                    <div className='FooterRights'>
                        <p>
                        Copyright ©2023 All rights reserved | Topliners.ng
                        </p>
                    </div>
                </div>
                <div className='Demma'>
                    <div className='FooterCompanyDiv'>
                        <div className='FooterCompanyHeaderText'>
                            <h2>Company</h2>
                        </div>
                        <div className='FooterCompanyNav'>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>Billings</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='FooterDown'>
               <div className="FooterLine"></div>
               <div className="FooterCopyRight">
                            Copyright ©2023 All rights reserved |
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer