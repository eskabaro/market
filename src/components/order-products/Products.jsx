import Item from "./item/Item"
import Loader from '../../ui/loader/Loader'
import TotalInfo from "./total-info/TotalInfo"

export default function Products({ data, isLoading }) {

     const totalPrice = localStorage.getItem('total-price')

     const totalStar = data.reduce((total, e) => total + e.star * e.quantity, 0)

     if (isLoading) {
          return <Loader />
     } return <>
          <ul className="p-0">
               {data && data.map(e => <Item key={e.id} {...e} />)}
          </ul>
          <TotalInfo totalStar={totalStar} totalPrice={totalPrice} />
     </>
}