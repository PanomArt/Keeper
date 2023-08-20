import React from 'react'

export default function Features() {
  return (
    <div className='features-maindiv'>
            {/*First Features*/}
            <div className='features-container'>
                     <div className='content'>
                              <div className='texts'>
                                      <h2 className='features-title'>
                                            Connect Unlimited Accounts
                                      </h2>
                                      <p className='features-description'>
                                            I'm a paragraph. Click here to add your own text 
                                            and edit me. I’m a great place for you to tell a story 
                                            and let your users know a little more about you.
                                      </p>
                              </div>

                              <div className='right-content'>
                                     <div className='title-no'>
                                          <h2>01</h2>
                                     </div>
                                     <div className='background-content'>
                                            <div className='svg-group'>
                                                   <svg className='rightarrow'>
                                                        <path d="M43 184.5h57.8L157 99.6v-.2l-56.2-84.9H43l59.4 85-59.4 85z"/>
                                                   </svg>

                                                   <svg className='tick'>
                                                        <path d='M150.5 13.8h-17.6l-52 131.1L64.2 98H32l31.8 88.2h35.3L168 13.8h-17.5z'/>
                                                   </svg>

                                                   <svg className='plus'>
                                                        <path d='M184 71.3h-55.3V16H71.3v55.3H16v57.5h55.3V184h57.5v-55.3H184V71.3z'/>
                                                   </svg>
                                            </div>
                                     </div>
                              </div>
                     </div>
                     <div className='benefits'>
                           <ul className='benefits-lists'>
                                <li>Clear overview of all finances</li>
                                <li>All of your accounts in one place</li>
                                <li>Build tables and lists in a click</li>
                           </ul>
                     </div>
            </div>
           {/*Second Features*/}
            <div className='features-container'>
                     <div className='content two'>
                              <div className='texts'>
                                      <h2 className='features-title'>
                                            Define Financial Goals
                                      </h2>
                                      <p className='features-description'>
                                            I'm a paragraph. Click here to add your own text 
                                            and edit me. I’m a great place for you to tell a story 
                                            and let your users know a little more about you.
                                      </p>
                              </div>

                              <div className='right-content'>
                                     <div className='title-no'>
                                          <h2>02</h2>
                                     </div>
                                     <div className='background-content'>
                                            <div className='svg-group'>
                                                 <svg className='square'>
                                                       <path d='M136 16.5v71.9H64V16.5h72z'/>
                                                 </svg>
                                                 <svg className='square two'>
                                                       <path d='M136 16.5v71.9H64V16.5h72z'/>
                                                 </svg>
                                                 <svg className='red-cross'>
                                                       <path d='M188 17h-56.4L100 61.2 68.4 17H12l60 83.3-58.8 82.1 55.2.5 31.5-43.8 31.5 43.8 55.2-.5-58.6-82.1L188 17z'/>
                                                 </svg>
                                            </div>
                                     </div>
                              </div>
                     </div>
                     <div className='benefits two'>
                           <ul className='benefits-lists two'>
                                <li>Set custom spending limits</li>
                                <li>Get realtime budget alerts</li>
                                <li>Devise a clear spending plan</li>
                           </ul>
                     </div>
            </div>
            {/*Third Features */}
            <div className='features-container'>
                     <div className='content'>
                              <div className='texts'>
                                      <h2 className='features-title'>
                                            Track Your Money
                                      </h2>
                                      <p className='features-description'>
                                            I'm a paragraph. Click here to add your own text 
                                            and edit me. I’m a great place for you to tell a story 
                                            and let your users know a little more about you.
                                      </p>
                              </div>

                              <div className='right-content'>
                                     <div className='title-no'>
                                          <h2>03</h2>
                                     </div>
                                     <div className='background-content'>
                                            <div className='svg-group'>
                                                   <svg className='flash'>
                                                         <path d='M128 137.4l58.9-116h-53.6L98.6 89.7H56.5l-43.7 85.7h53.6l19.3-38H128z'/>
                                                   </svg>
                                                   <svg className='plus third'>
                                                        <path d='M184 71.3h-55.3V16H71.3v55.3H16v57.5h55.3V184h57.5v-55.3H184V71.3z'/>
                                                   </svg>
                                            </div>
                                     </div>
                              </div>
                     </div>
                     <div className='benefits'>
                           <ul className='benefits-lists'>
                                <li>Cancel wasteful accounts</li>
                                <li>Schedule payments on the go</li>
                                <li>Manage your debt</li>
                           </ul>
                     </div>
            </div>
    </div>
  )
}
