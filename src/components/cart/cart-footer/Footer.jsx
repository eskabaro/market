import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import style from '../../../styles/cart/Footer.module.scss'

export default function Footer({ totalPrice, length }) {

     useEffect(() => {
          localStorage.setItem('total-price', totalPrice)
     }, [totalPrice])

     return <footer className={style.footer}>
          <span className={style.price}>Total price: {totalPrice}$</span>
          <Link to={'/order'}>
               <button disabled={length === 0 ? true : false} className={`${style.button} ${length === 0 ? style.disabled : ''}`}>Order</button>
          </Link>
     </footer>
}