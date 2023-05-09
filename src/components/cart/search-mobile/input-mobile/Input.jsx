import { ReactComponent as Cross } from '../../../../ui/svg/Cross.svg'

import Item from './item-input/Item'

import style from '../../../../styles/cart/Search.module.scss'

export default function Input({ open, value, setValue, handelItem }) {
     return <>
          <label className={`${style['box-input']} ${open && style.active}`}>
               <input type="text" value={value} onInput={e => setValue(e.target.value)} placeholder='SEARCH' />
               <Cross className={style.clean} onClick={() => setValue('')}/>
          </label>
          {value && <Item handelItem={handelItem} open={open} />}
     </>
}