import Select from "../../../../components/main/carusel/carusel-item/select-size/Select"
import style from '../../../../styles/main/Card.module.scss'

export default function ActiveSelect({ isActive, item }) {
return <section className={`${style.section} ${isActive ? style.active : ''}`}>
          <div className={`${style['info-block']} ${isActive ? style.active : ''}`}>
               <Select id={item.id} size={item.size} />
          </div>
          <div className={`${style.info} ${isActive ? style.active : ''}`}><p>Calories</p><span>{item.calories}</span></div>
          <div className={`${style.info} ${isActive ? style.active : ''}`} style={{ paddingLeft: '20px' }}><p>Total fat</p><span>{item.fat}</span></div>
          <div className={`${style.info} ${isActive ? style.active : ''}`} style={{ paddingLeft: '20px' }}><p>Sugar</p><span>{item.sugar}</span></div>
     </section>
}