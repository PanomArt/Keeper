import React from 'react'

export default function Hero() {
  return (
    <div className='hero-maindiv'>
          <div className='hero-background'/>
                <div className='hero-title'>
                        <h2 className='hero-title-texts'>
                                Sometimes Money Can Be Confusing.
                        </h2>
                        <p className='hero-title-description'>
                                Let Keeper Make it Simple!
                        </p>
                </div>

                <div className='download-btn'>
                        <a href="https://play.google.com/store" target="_blank">
                              <img src='/googleplay.png'/>
                        </a>
                        <a href='https://www.apple.com/app-store/' target="_blank">
                              <img src='/appstore.png'/>
                        </a>
                </div>

                <div className='mobile-img'>
                       <img src='/mobileapp.png'/>
                </div>
    </div>
  )
}
