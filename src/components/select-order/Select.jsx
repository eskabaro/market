import { useEffect, useState } from "react"
import { useJsApiLoader } from "@react-google-maps/api"
import { useDispatch, useSelector } from "react-redux"

import { number } from "../../redux/slices/Form"
import { firstName } from "../../redux/slices/Form"
import { lastName } from "../../redux/slices/Form"
import { selectPlace } from '../../redux/slices/Form'

import Contact from "./contact/Contact"
import Map from "./googleMap/map/Map"
import Autocomplete from "./googleMap/autocomplete/Autocomplete"
import Head from "./headers/Head"
import Button from "../../ui/btn-from-order/Button"
import Loader from "../../ui/loader-from-map/Loader"
import Modal from "./modal/Modal"

const MAP_KEY = process.env.REACT_APP_API_MAP_KEY

export default function Select() {

     const libraries = ['places']

     const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: MAP_KEY,
          libraries
     })

     const [latitude, setLatitude] = useState()
     const [longitude, setLongitude] = useState()

     const center = {
          lat: latitude,
          lng: longitude
     }

     const onSelect = (coordinates) => {
          setLatitude(coordinates.lat)
          setLongitude(coordinates.lng)
     }

     useEffect(() => {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(position => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
               })
          } else alert('Невозможно получить текущюю геолокацию!')
     }, [])

     const [Fname, setFname] = useState('')
     const [Lname, setLname] = useState('')
     const [num, setNum] = useState('')
     const [valueAutocomplete, setValueAutocomplete] = useState('')

     const [orderCompleted, setOrderCompleted] = useState(false)

     const disabled = useSelector(state => state.form.btnDisabled)

     const dispatch = useDispatch()

     const checkForm = (event) => {
          dispatch(firstName(Fname))
          dispatch(lastName(Lname))
          dispatch(number(num))
          dispatch(selectPlace(valueAutocomplete))

          if (Fname && Lname && num && valueAutocomplete) {
               console.log('Order completed!')
               setOrderCompleted(true)

          }
          event.preventDefault()
     }


     return <>
          <form onSubmit={checkForm}>
               <Head number={1} text={'Enter the recipient\'s contact details'} />
               <Contact
                    setFname={setFname}
                    Fname={Fname}
                    setLname={setLname}
                    Lname={Lname}
                    setNum={setNum}
                    num={num} />
               <div>
                    <Head number={2} text={'Choose the right place for delivery'} />
                    <Autocomplete isLoaded={isLoaded} onSelect={onSelect} setValueAutocomplete={setValueAutocomplete} />
                    {isLoaded ? <Map center={center} /> : <Loader />}
               </div>
               <Head number={3} text={'Make an order'} />
               <Button disabled={disabled} checkForm={checkForm} />
          </form>
          {orderCompleted && <Modal name={Fname} number={num} />}
     </>
}