import { ReactComponent as Duwn } from '../../../ui/svg/Duwn.svg'
import style from '../../../styles/main/Clue.module.scss'

export default function Clue({ focus }) {
     return <div className={`${style.clue} ${focus ? style.shov : ''}`}>
          <div className={style.inamate}>
               <div>
                    <span style={{color: '#00754a', fontWeight: '600'}}>Scroll down</span>
               </div>
               <Duwn width={40} height={40} className={style.svg} fill={'#00754a'} />
          </div>
     </div>
}