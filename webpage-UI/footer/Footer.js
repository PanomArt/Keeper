import Link from 'next/link'
import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer-maindiv'>
           <div className='footer-container'>
  
                    <form className='contact-form'>
                         <h2 className='row-title'>Reach out to us</h2>
                         <input type='text' placeholder='Name'/>
                         <input type='Email' placeholder='Email'/>
                         <input type='text' placeholder='Number'/>
                         <textarea placeholder='Type your message here ...'/>
                           <div className='btn'>
                                 <button className='submit-btn'>Submit</button>
                            </div>
                    </form>

                    <div className='about'>
                          <h2 className='row-title'>About</h2>
                           <div className='about-content'>
                                <div className='links'>
                                     <Link href='/' className='about-link'>Technical Info</Link>
                                     <Link href='/' className='about-link'>Other Projects</Link>
                                </div>

                                <div className='download'>
                                          <h2 className='download-title'>Download Keeper</h2>
                                          <div className='download-button'>
                                                <img src='/googleplay.png' className='googleplay'/>
                                                <img src='/appstore.png' className='appstore'/> 
                                          </div>
                                </div> 
                           </div>      
                    </div>

                    <div className='contact'>
                          <h2 className='row-title'>Contact</h2>
                               <div className='contact-container'>
                                      <div className='contact-information'>
                                             <p className='address'>
                                                   500 Terry Francine street 
                                                   San Francisco,CA 94158
                                             </p>
                                             <p className='tel-email'>
                                                   Tel- 123-456-7890 <br/>
                                                   Email - info@mysite.com
                                             </p>
                                      </div>

                                      <Link href='/'>
                                            <button className='upper-arrow' ></button>
                                      </Link>

                                      <div className='socials-links'>
                                             <Link href='/' className='icon'><FaFacebookF/></Link>
                                             <Link href='/' className='icon'><FaTwitter/></Link>
                                             <Link href='/' className='icon'><FaLinkedinIn/></Link>
                                      </div>

                                      <div className='copyright'>
                                             <p className='copyright-text'>
                                                  © 2035 by Keeper.
                                                  Powered and secured by <span>Wix</span>
                                             </p>
                                      </div>
                               </div>
                    </div>
           </div>
    </div>
  )
}
