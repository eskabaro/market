import { useParams } from 'react-router-dom'
import { useGetCurrentDetailsQuery } from '../../redux/api/GoodsApi'

import Header from './Header'
import InfoBlock from './info-block/InfoBlock'
import Loader from '../../ui/loader/Loader'

import style from '../../styles/details/Details.module.scss'

export default function Details() {

     const { id } = useParams()

     const { data = {}, isLoading, isError } = useGetCurrentDetailsQuery(parseInt(id))

     if (isError) return <h1>Error</h1>

     if (isLoading) return <Loader />

     return <main className={style.wrapper}>
          <Header />
          <div className={style.product}>
               <InfoBlock data={data} isLoading={isLoading} />
          </div>
     </main> 
}