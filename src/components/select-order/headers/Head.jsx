import style from '../../../styles/order/Order.module.scss'

export default function Head({ number, text }) {
     return <div className={style.heading}>
          <span>{number}</span>
          <h3>{text}</h3>
     </div>
}