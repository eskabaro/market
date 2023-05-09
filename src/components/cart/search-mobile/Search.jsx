import { useState } from 'react'
import { useGetGoodsQuery } from '../../../redux/api/GoodsApi'

import Input from './input-mobile/Input'

import style from '../../../styles/cart/Search.module.scss'

export default function Search() {

     const [open, setOpen] = useState(false)

     const [value, setValue] = useState('')

     const { data = [] } = useGetGoodsQuery()

     const opened = () => {
          setOpen(!open)
          setValue('')
     }

     const handelItem = data.filter(e => e.name.toLowerCase().includes(value.toLocaleLowerCase()))

     return <div className={style.wrapper}>
          <div className={`${style.circle} ${open ? style.active : ''}`}></div>
          <Input open={open} setValue={setValue} value={value} handelItem={handelItem} />
          <button onClick={opened} className={`${style.button} ${open ? style.active : ''}`} >
               <svg width="16" height="16" fill="currentColor" className="bi bi-search opacity-75" viewBox="0 0 16 16">
                    <path className={style.svg} d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
               </svg>
          </button>
     </div>
}