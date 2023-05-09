import Button from '../../../../ui/btn-from-cart/Button'
import Buttons from './buttons/Buttons'
import Stars from '../../../../ui/item-stars/Stars'

import style from '../../../../styles/details/Details.module.scss'

export default function Block3({ data }) {
     return <div>
          <div className={style['size-block']}>
               <span>Size:</span>
               <div>
                    <Buttons data={data} />
               </div>
          </div>
          <div className={style.stars}>
               <span>Stars: </span><div><Stars items={data.star}/></div>
          </div>
          <Button item={data} />
     </div>
}