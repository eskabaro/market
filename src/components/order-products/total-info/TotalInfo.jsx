import Stars from '../../../ui/item-stars/Stars'

import style from '../../../styles/order/Products.module.scss'

export default function TotalInfo({ totalPrice, totalStar }) {
     return <div>
          <div className={style['total-price']}>
               <span>Total price:</span>
               <span>{totalPrice} $</span>
          </div>
          <div className={style['total-stars']}>
               <span>Total stars:</span>
               <Stars items={totalStar} />
          </div>
     </div>
}