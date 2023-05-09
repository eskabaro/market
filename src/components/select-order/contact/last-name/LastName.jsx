import style from '../../../../styles/order/Contact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { lastName } from '../../../../redux/slices/Form'
import { ReactComponent as Xmark } from '../../../../ui/svg/xmark/Xmark.svg'

export default function LastName({ setLname, Lname }) {

     const error = useSelector(state => state.form.lastName.error)

     const dispatch = useDispatch()

     return <label className={`${style['last-name']} ${error ? style.error : ''}`} onBlur={() => dispatch(lastName(Lname))}>
          <input type="text" onChange={e => setLname(e.target.value)} />
          {error && <Xmark />}
          <span className={`${Lname ? style.active : ''}`}>Last name</span>
     </label>
}