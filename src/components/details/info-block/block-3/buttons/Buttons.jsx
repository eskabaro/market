import { useSelectSizeMutation } from '../../../../../redux/api/GoodsApi'

import '../../../../../styles/details/Labels.module.scss'

export default function Buttons({ data }) {


     const [ApiSelect] = useSelectSizeMutation()
     const selectSize = async (id, siz) => await ApiSelect({ id, siz }).unwrap()

     return <>
          <label htmlFor='Short'>
               <input id='Short' defaultChecked={data.size === 'Short' ? true : false}
                    type="radio" name='male' onClick={() => selectSize(data.id, 'Short')} />
               <p>Short</p>
               <p className='opacity-75'>8 fl oz</p>
          </label>
          <label htmlFor='Tall'>
               <input id='Tall' defaultChecked={data.size === 'Tall' ? true : false}
                    type="radio" name='male' onClick={() => selectSize(data.id, 'Tall')} />
               <p>Tall</p>
               <p className='opacity-75'>12 fl oz</p>
          </label>
          <label htmlFor='Grande'>
               <input id='Grande' defaultChecked={data.size === 'Grande' ? true : false}
                    type="radio" name='male' onClick={() => selectSize(data.id, 'Grande')} />
               <p>Grande</p>
               <p className='opacity-75'>16 fl oz</p>
          </label>
          <label htmlFor='Venti'>
               <input id='Venti' defaultChecked={data.size === 'Venti' ? true : false}
                    type="radio" name='male' onClick={() => selectSize(data.id, 'Venti')} />
               <p>Venti</p>
               <p className='opacity-75'>20 fl oz</p>
          </label>
     </>
}