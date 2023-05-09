import Item from './item/Item'
import style from '../../../styles/cart/Scrollbar.module.scss'

export default function Scrollbar({ data }) {
     return <main className={style.scrollbar}>
          <ul>
               {data.map(e => <Item key={e.id} item={e} />)}
          </ul>
     </main>
}