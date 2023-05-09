import { useState } from 'react'
import { useGetGoodsQuery } from '../../../redux/api/GoodsApi'
import Item from './item-input/Item'
import style from '../../../styles/header/Input.module.scss'
import styleItem from '../../../styles/header/Item-input.module.scss'

export default function Input() {

     const { data = [] } = useGetGoodsQuery()

     const [value, setValue] = useState('')

     const handelItem = data.filter(e => e.name.toLowerCase().includes(value.toLocaleLowerCase()))

     return <div className={style['bg-circle']}>
          <label className={style.label}>
               <input className={style.input} type="text" placeholder='SEARCH' onChange={e => setValue(e.target.value)} value={value} />
               <svg style={{ transform: 'rotate(90deg)' }} width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path className={style.svg} d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
               </svg>
          </label>
          <ul className={styleItem['item-box']}>
               {value ? handelItem.map(e => <Item key={e.id} item={e} setValue={setValue} />) : null}
          </ul>
     </div>
}