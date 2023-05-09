import style from '../../styles/title/Title.module.scss'

export default function Title () {
     return <div className='p-0'>
          <h1 className={style.h1}>The happiest hour of the year</h1>
          <p className={style.p}>Sing up to get exclisive access to deals on drinks this holiday season.</p>
     </div>
}