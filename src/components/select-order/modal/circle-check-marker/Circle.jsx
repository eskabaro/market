import { useEffect, useState } from 'react'
import { ReactComponent as Marker } from '../../../../ui/svg/check-marker/Marker.svg'

import style from '../../../../styles/order/Modal.module.scss'

export default function Modal() {

     const [active, setActive] = useState(false)

     useEffect(() => {
          setTimeout(() => {
               setActive(true)
          }, 300)
     }, [])

     return <div className={`${style['bg-circle']} ${active && style.active}`}>
          <div className={`${style.circle} ${active && style.active}`}>
               <Marker />
          </div>
     </div>
}