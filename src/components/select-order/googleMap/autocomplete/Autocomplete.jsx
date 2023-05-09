import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import usePlacesAutocomplete, {
     getGeocode,
     getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import { selectPlace } from "../../../../redux/slices/Form";
import { ReactComponent as Xmark } from "../../../../ui/svg/xmark/Xmark.svg";

import style from '../../../../styles/order/Map.module.scss'

export default function Autocomplete({ isLoaded, onSelect, setValueAutocomplete }) {

     const dispatch = useDispatch()

     const error = useSelector(state => state.form.place.error)

     const {
          ready,
          value,
          suggestions: { status, data },
          setValue,
          init,
          clearSuggestions,
     } = usePlacesAutocomplete({
          callbackName: "YOUR_CALLBACK_NAME",
          initOnMount: false,
          debounce: 300,
     })

     const ref = useOnclickOutside(() => {
          clearSuggestions()
     })

     const handleInput = (e) => {
          setValue(e.target.value)
          setValueAutocomplete(e.target.value)
     }

     const handleSelect =
          ({ description }) =>
               () => {
                    setValue(description, false)
                    setValueAutocomplete(description, false)
                    clearSuggestions()

                    getGeocode({ address: description }).then((results) => {
                         const { lat, lng } = getLatLng(results[0])
                         onSelect({ lat, lng })
                    })
               }

     const renderSuggestions = () =>
          data.map((suggestion) => {
               const {
                    place_id,
                    structured_formatting: { main_text, secondary_text },
               } = suggestion

               return (
                    <li key={place_id} onClick={handleSelect(suggestion)}>
                         <strong>{main_text}</strong> <small>{secondary_text}</small>
                    </li>
               )
          })

     useEffect(() => {
          if (isLoaded) init()
     }, [isLoaded, init])
     return <label ref={ref} className={`${style['input-box']} ${error ? style.error : ''}`} onBlur={() => dispatch(selectPlace(value))}>
          <input type="text"
               value={value}
               onChange={handleInput}
               disabled={!ready} />
          <span className={`${value ? style.active : ''}`}>Choose the right place</span>
          {error && <Xmark />}
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
     </label>
}