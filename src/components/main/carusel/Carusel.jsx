import { useState } from 'react'

import CarouselItem from '../../../components/main/carusel/carusel-item/CaruselItem'
import Clue from './Clue'

import style from '../../../styles/main/Carusel.module.scss'

export default function Carusel({ data }) {

     const [focus, setFocus] = useState(true)

     return <div className='px-4'>
          <div onTouchMove={() => setFocus(false)} className={style.wrapper}>
               {data.map(item => <CarouselItem item={item} key={item.id} />)}
          </div>
          <Clue focus={focus} />
     </div>
}