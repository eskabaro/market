import { useState } from 'react'
import style from '../../../styles/main/Grid.module.scss'
import Card from '../../../components/main/grid/card/Card'

export default function Grid({ data, isLoading }) {

     const [selectedItemIndex, setSelectedItemIndex] = useState(1)

     return <div className={style.wrapper}>
          {data.map((item, index) => <Card key={item.id} id={data.id} item={item} isLoading={isLoading} isActive={index === selectedItemIndex} selectItem={() => setSelectedItemIndex(index)} />)}
     </div>
}