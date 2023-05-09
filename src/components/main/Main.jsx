import Carusel from './carusel/Carusel'
import Grid from './grid/Grid'
import Loader from '../../ui/loader/Loader'

export default function Main({ data, isLoading }) {

     if (isLoading) return <Loader />

     return <>
          <Grid data={data} isLoading={isLoading} />
          <Carusel data={data} />
     </>
}