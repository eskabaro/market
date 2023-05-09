import { useState } from 'react'
import { useGetCartProductsQuery } from '../../redux/api/GoodsApi'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './navigation-header/Navigation'
import Input from './input-header/Input'
import Button from './btn-header/Button'
import Cart from '../cart/Cart'

import style from '../../styles/header/Header.module.scss'

export default function Header({ setSort, sort }) {

     const { data = [] } = useGetCartProductsQuery()

     const [open, setOpen] = useState(false)

     const handleOpenCart = () => setOpen(!open)

     if (open) document.body.style.overflow = 'hidden'
     if (!open) document.body.style.overflow = 'auto'



     return <header className='mt-3'>
          <Row className='align-items-center'>
               <Col className={style['col-1']}>
                    <Navigation setSort={setSort} sort={sort}/>
               </Col>
               <Col className={style['col-2']}>
                    <Input />
               </Col>
               <Col className='d-flex justify-content-end'>
                    <Button handleOpenCart={handleOpenCart} data={data.length} />
               </Col>
          </Row>
          <Cart open={open} handleOpenCart={handleOpenCart} data={data} />
     </header>
}