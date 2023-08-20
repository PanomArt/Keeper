import React from 'react'
import { client } from '../data'

export default function Client() {
  return (
    <div className='client-maindiv'>
          <p className='client-header'>As featured in:</p>
          <div className='client-container'>
                 {client.map((item)=>(
                     <div className='client-image'>
                            <img src={item.img}/>
                     </div>
                 ))}
          </div>
    </div>
  )
}
