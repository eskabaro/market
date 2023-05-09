import style from './Button.module.scss'

export default function Button({ disabled, checkForm }) {
     return <div className={style.wrapper}>
          <button type="submit" disabled={disabled} onClick={checkForm}>Checkout</button>
     </div>
}