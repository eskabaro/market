import { useAddToCartMutation } from "../../redux/api/GoodsApi"

import style from '../../styles/main/ButtonFromCart.module.scss'

export default function BtnAdd({item}) {

     const [AddToCart, { isLoading }] = useAddToCartMutation()
     const add = async item => await AddToCart(item).unwrap()

     return <button className={style['add-to-cart']} disabled={isLoading} onClick={() => add(item)}>Add to cart</button>
}