import { useDeleteFromCartMutation } from "../../../../redux/api/GoodsApi"
import { ReactComponent as Cross } from "../../../../ui/svg/Cross.svg"

import Counter from "./counter/Counter"

import style from '../../../../styles/cart/Scrollbar.module.scss'

export default function Item({ item }) {

     const [Remove, { isLoading }] = useDeleteFromCartMutation()

     return <li className="d-flex justify-content-between">
          <div className="position-relative">
               <img src={`/${item.img}`} alt={item.name} />
               <button onClick={() => Remove(item.id)} disabled={isLoading} >
                    <Cross />
               </button>
          </div>
          <div>
               <p>{item.name}</p>
               <div className={style.name}>
                    <span>{item.size}</span>
               </div>
          </div>
          <div>
               <span>{item.price * item.quantity} $</span>
               <Counter quantity={item.quantity} id={item.id} />
          </div>
     </li>
}