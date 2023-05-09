import { useGetGoodsLengthQuery } from "../../redux/api/GoodsApi"
import { Pagination } from '@mui/material'

export default function FCPagination({ setPage, pageCur }) {

     const { data, isSuccess } = useGetGoodsLengthQuery()
     const page = []
     if (isSuccess) for (let i = 1; i <= Math.ceil(data.length / 8); i++) page.push(i)

     const mediaQuery = window.matchMedia('(max-width: 767px)')
     
     if (!mediaQuery.matches) return <div className='d-flex justify-content-center mb-5'>
          {page !== 0 && (
               <Pagination
                    count={page.length}
                    page={pageCur}
                    onChange={(_, num) => setPage(num)}
               />
          )}
     </div>
}