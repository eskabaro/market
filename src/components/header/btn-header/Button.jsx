import style from '../../../styles/header/Button-header.module.scss'

export default function Button({ handleOpenCart, data }) {
     return <div className='d-flex align-items-center'>
          <span className={style.counter}>{data}</span>
          <span className={style.text}>MY BASKET</span>
          <button onClick={handleOpenCart} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '5px' }}>
               <div className={style.button}></div>
          </button>
     </div>
}