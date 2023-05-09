import { Link } from 'react-router-dom'

import style from '../../../../../styles/header/Item-input.module.scss'

export default function Item({ handelItem, open }) {
     return <div className={`${style['item-box']} ${!open && style.active}`}>
          {handelItem &&
               handelItem.map(e =>
                    <Link key={e.id} to={`${e.id}/${e.searchName}`}>
                         <span className={style.item}>{e.name}</span>
                    </Link>)}
     </div>
}