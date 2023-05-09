import { useDeleteFromCartMutation } from "../../redux/api/GoodsApi"

import style from '../../styles/main/ButtonFromCart.module.scss'

export default function BtnDelete({ id }) {

     const [Delete, { isLoading }] = useDeleteFromCartMutation()
     const remove = async (id) => await Delete(id).unwrap()

     return <button className={style['remove-from-cart']} disabled={isLoading} onClick={() => remove(id)}>Remove from cart</button>
}