import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../../../styles/order/Modal.module.scss'

import Circle from './circle-check-marker/Circle'

export default function Modal({ name, number}) {

     const [active, setActive] = useState(false)

     useEffect(() => {
          document.body.style.overflow = 'hidden'
          setActive(true)
     }, [])

     return <div className={`${style['bg-modal']} ${active && style.active}`}>
          <div className={`${style.modal} ${active && style.active}`}>
               <Circle />
               <h3>Order completed!</h3>
               <p>Thanks for buying {name}!</p>
               <br />
               <p>The courier will contact you to clarify the details at {number}.</p>
               <br />
               <Link to={'/'}>Back to main page</Link>
          </div>
     </div>
}