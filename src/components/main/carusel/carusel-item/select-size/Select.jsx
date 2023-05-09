import { useSelectSizeMutation } from '../../../../../redux/api/GoodsApi'
import style from '../../../../../styles/main/Carusel.module.scss'

export default function Select({ id, size }) {

     const [ApiSelect] = useSelectSizeMutation()
     const selectSize = async (id, siz) => await ApiSelect({ id, siz }).unwrap()

     return <div className={style.select}>
          <span>Select a size</span>
          <select defaultValue={size} onChange={e => selectSize(id, e.target.value)} className={style['btn-select']}>
               <option style={{ color: '#000' }} value="Short">Short</option>
               <option style={{ color: '#000' }} value="Tall">Tall</option>
               <option style={{ color: '#000' }} value="Grande">Grande</option>
               <option style={{ color: '#000' }} value="Venti">Venti</option>
          </select>
     </div>
}