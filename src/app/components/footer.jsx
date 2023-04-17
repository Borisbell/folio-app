import React from 'react'
import { professionalData } from '../data'

export default function footer() {
  return (
    <ul className='flex flex-row'>
        {professionalData.footer_links.map((item) => 
            <li className='font-light mb-2 mr-2 text-slate-100'>
                <a 
                  className='underline decoration-solid underline-offset-4 hover:text-purple-400'
                  href={item.link}>{item.text}</a>
            </li>
        )}
      </ul>
  )
}
