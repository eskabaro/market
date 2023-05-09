import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetCartProductsQuery } from '../redux/api/GoodsApi'
import { Navigate  } from 'react-router-dom'

import Products from '../components/order-products/Products'
import Select from '../components/select-order/Select'
import Footer from '../components/footer/Footer'

import style from '../styles/order/Order.module.scss'

export default function OrderPage() {

     const { data = [], isLoading, isSuccess } = useGetCartProductsQuery()

     useEffect(() => {
          document.body.style.overflow = 'auto'
     }, [])

     return <div className={style.wrapper}>
          <div>
               <Link to={'/'}><img src="images/logo/logo.png" alt="Logo" /></Link>
          </div>
          <div className='d-flex justify-content-between'>
               <Row className={style.products}>
                    <Products data={data} isLoading={isLoading} />
               </Row>
               <Row className={style.select}>
                    <Select />
               </Row>
          </div>
          <Footer />
          {isSuccess ? !data.length && <Navigate to={'/'} replace={true} /> : null}
     </div>
}