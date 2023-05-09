import Block1 from "./block-1/Block1"
import Block2 from "./block-2/Block2"
import Block3 from "./block-3/Block3"

import style from '../../../styles/details/Details.module.scss'

export default function InfoBlock({ data, isLoading }) {
     return <div className={style['wrapper-blocks']}>
          <Block1 name={data.name} description={data.description} calories={data.calories} fat={data.fat} sugar={data.sugar} />
          <Block2 price={data.price} img={data.img} isLoading={isLoading} />
          <Block3 data={data}/>
     </div>
}