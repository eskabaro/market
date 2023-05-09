import Select from './select-size/Select'
import Button from '../../../../ui/btn-from-cart/Button'

import style from '../../../../styles/main/Carusel.module.scss'
import LearnMore from '../../../../ui/btn-learn-more/LeranMore'

export default function CarouselItem({ item }) {
     return <div className={style['card-wrapper']}>
          <div className={style.card}>
               <img className={style.photo} src={item.img} alt="" />
               <h3 className={style.h3}>{item.name}</h3>
               <Select id={item.id} />
               <div className={style.content}><p>Calories</p><span>{item.calories}</span></div>
               <div className={style.content} style={{ paddingLeft: '20px' }}><p>Total Fat</p><span>{item.fat}</span></div>
               <div className={style.content} style={{ paddingLeft: '20px' }}><p>Sugar</p><span>{item.sugar}</span></div>
               <Button item={item} />
               <div className='mt-3'>
                    <LearnMore name={item.searchName} id={item.id} />
               </div>
          </div>
     </div>
}