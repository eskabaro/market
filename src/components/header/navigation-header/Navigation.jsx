import Logo from '../logo/Logo'

import style from '../../../styles/header/Navigation.module.scss'

export default function Navigation({ setSort, sort }) {
     return <nav className='d-flex align-items-center'>
          <Logo />
          <ul className='d-flex m-0'>
               <li className={`${style.li} ${sort === 'Coffee' ? style.actv : ''}`} onClick={() => setSort('Coffee')}>Coffee</li>
               <li className={`${style.li} ${sort === 'Tea' ? style.actv : ''}`} onClick={() => setSort('Tea')}>Tea</li>
               <li className={`${style.li} ${sort === '' ? style.actv : ''}`} onClick={() => setSort('')}>All</li>
          </ul>
     </nav>
}