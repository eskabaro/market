import Stars from '../../../ui/item-stars/Stars'
import style from '../../../styles/order/Products.module.scss'

export default function Item({ name, size, price, img, quantity, star }) {

     return <li className={style.wrapper}>
          <img src={img} alt={name} />
          <div className={style['name-size']}>
               <p>{name}</p>
               <span>{size}</span>
          </div>
          <div className={style.price}>
               <span>{price * quantity} $</span>
               <Stars items={star * quantity} />
          </div>
          <span className={style.count}>x{quantity}</span>
     </li>
}