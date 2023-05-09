import { useDispatch, useSelector } from 'react-redux'
import style from '../../../../styles/order/Contact.module.scss'
import { number } from '../../../../redux/slices/Form'
import { ReactComponent as Xmark } from '../../../../ui/svg/xmark/Xmark.svg'

export default function Number({ setNum, num }) {

     const error = useSelector(state => state.form.number.error)

     const dispatch = useDispatch()

     return <label className={`${style.number} ${error ? style.error : ''}`} onBlur={() => dispatch(number(num))}>
          <input type="text" onChange={e => setNum(e.target.value)} />
          {error && <Xmark />}
          <span className={`${num ? style.active : ''}`}>Nuber</span>
     </label>
}