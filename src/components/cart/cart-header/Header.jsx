import Search from "../search-mobile/Search"
import Button from "./btn-close/Button"

import style from '../../../styles/cart/Cart.module.scss'

export default function Header({ handleOpenCart }) {
     return <header className={style.header}>
          <Button handleOpenCart={handleOpenCart} />
          <h6 className={style.title}>MY BASKET</h6>
          <Search />
     </header>
}