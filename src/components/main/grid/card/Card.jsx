import ActiveSelect from './ActiveSelect'
import style from '../../../../styles/main/Card.module.scss'
import Button from '../../../../ui/btn-from-cart/Button'
import LearnMore from '../../../../ui/btn-learn-more/LeranMore'
// import Loader from '../../../'

export default function Card({ item, selectItem, isActive, id, isLoading }) {

     // if (isLoading) return <Loader />

     return <div className={`${style.card} ${isActive ? style.active : ''}`} title={item.name}>
          <img onClick={selectItem} src={item.img} alt={item.name} className={style.img} />
          <h3 className={`${style.h3} ${isActive ? style.active : ''}`}>{item.name}</h3>
          <ActiveSelect isActive={isActive} item={item} />
          <div className={`${style.btn} ${isActive ? style.active : ''}`}>
               <Button item={item} />
               <LearnMore name={item.searchName} id={item.id} />
          </div>
     </div>
}