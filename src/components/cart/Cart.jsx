import Header from './cart-header/Header'
import Scrollbar from './cart-scrollbar/Scrollbar'
import Footer from './cart-footer/Footer'

import style from '../../styles/cart/Cart.module.scss'

export default function Cart({ open, handleOpenCart, data }) {

     const totalPrice = data.reduce((total, item) => total + item.price * item.quantity, 0)

     return <>
          <div onClick={handleOpenCart} className={`${style.wrapper} ${open ? style.shov : ''}`}></div>
          <div className={`${style.cart} ${open ? style.shov : ''}`}>
               <Header handleOpenCart={handleOpenCart} />
               <Scrollbar data={data} />
               <Footer totalPrice={totalPrice} length={data.length} />
          </div>
     </>
}