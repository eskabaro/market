import style from '../../../../styles/order/Contact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { firstName } from '../../../../redux/slices/Form'
import { ReactComponent as Xmark } from '../../../../ui/svg/xmark/Xmark.svg'

export default function FirstName({ setFname, Fname }) {
     
     const error = useSelector(state => state.form.firstName.error)

     const dispatch = useDispatch()

     return <label className={`${style['first-name']} ${error ? style.error : ''}`} onBlur={() => dispatch(firstName(Fname))}>
          <input type="text" onChange={e => setFname(e.target.value)} />
          {error && <Xmark />}
          <span className={`${Fname ? style.active : ''}`}>First name</span>
     </label>
}