import { Link } from "react-router-dom"
import style from '../../styles/main/Link.module.scss'

export default function LearnMore({ name, id }) {
     return <Link to={`/${id}/${name}`} className={style.link}>Learn more</Link>
}