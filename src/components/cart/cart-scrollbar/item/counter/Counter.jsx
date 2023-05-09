import { 
     useDecrementQuantityMutation, 
     useIncrementQuatityMutation 
} from '../../../../../redux/api/GoodsApi'

import style from '../../../../../styles/cart/Scrollbar.module.scss'

export default function Counter({ quantity, id }) {

     const [inc] = useIncrementQuatityMutation()
     const increment = async (id) => {
          const count = quantity + 1
          await inc({id, count}).unwrap()
     }

     const [dec] = useDecrementQuantityMutation()
     const decrement = async (id) => {
          let count = quantity - 1
          if (count < 1) {
               return false
          } else {
               await dec({ id, count }).unwrap()
          }   
     }

     return <div className={style.counter}>
          <button onClick={() => decrement(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increment(id)}>+</button>
     </div>
}