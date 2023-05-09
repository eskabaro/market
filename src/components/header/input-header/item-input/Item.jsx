import { Link } from 'react-router-dom'
import style from '../../../../styles/header/Item-input.module.scss'

export default function Item({ item, setValue }) {
     return <Link to={`/${item.id}/${item.searchName}`} >
          <li className={style.item} onClick={() => setValue('')}>
               {item.name}
          </li>
     </Link>
} 