import { useGetCartProductsQuery } from '../../redux/api/GoodsApi'

import BtnAdd from './BtnAdd'
import BtnDelete from './BtnDelete'

export default function Button({ item }) {

     const { data = [] } = useGetCartProductsQuery()

     const product = data.find(e => e.id === item.id)

     if (product) {
          return <BtnDelete id={item.id}/>
     } return <BtnAdd item={item}/>
}