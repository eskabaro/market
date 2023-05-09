import Row from "react-bootstrap/esm/Row"
import { useState } from "react"
import { useGetGoodsQuery } from "../redux/api/GoodsApi"

import Header from "../components/header/Header"
import Title from "../components/title/Title"
import Main from "../components/main/Main"
import Pagination from "../components/pagination/Pagination"
import Footer from "../components/footer/Footer"

export default function MainPage() {

     const [sort, setSort] = useState('')
     const [page, setPage] = useState(1)

     const body = {
          page,
          sort
     }

     const { data = [], isLoading } = useGetGoodsQuery(body)

     return <Row>
          <Header setSort={setSort} sort={sort} />
          <Title />
          <Main data={data} isLoading={isLoading} />
          <Pagination setPage={setPage} pageCur={page} />
          <Footer />
     </Row>
}