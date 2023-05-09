import { Link } from 'react-router-dom'

import style from '../../../styles/header/Navigation.module.scss'

export default function Logo() {
     return <Link to={'/'}> 
          <img className={style.Logo} src='/images/logo/logo.png' alt="Logo"  />
     </Link>
}