import FirstName from './first-name/FirstName'
import LastName from './last-name/LastName'
import Number from './number/Number'

import style from '../../../styles/order/Contact.module.scss'

export default function Contact(props) {
     return <div className={style.contact}>
          <FirstName Fname={props.Fname} setFname={props.setFname}/>
          <LastName Lname={props.Lname} setLname={props.setLname} />
          <Number num={props.num} setNum={props.setNum} />
     </div>
}