import style from './Stars.module.scss'

export default function Stars({ items }) {
     return <span className={style.stars}>{items} ★ item</span>
}