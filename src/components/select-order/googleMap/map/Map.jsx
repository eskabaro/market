import { GoogleMap } from '@react-google-maps/api'

import style from '../../../../styles/order/Map.module.scss'

export default function Map({ center }) {

     const mapContainerStyle = {
          width: '100%',
          height: '400px'
     }

     return <div className={style.wrapper}>
          <GoogleMap
               mapContainerStyle={mapContainerStyle}
               zoom={17}
               center={center}
               options={{
                    zoomControl: false,
                    keyboardShortcuts: false,
                    disableDefaultUI: true
               }}
          >
          </GoogleMap>
     </div>
}