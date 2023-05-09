import { Routes, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'

import MainPage from "./pages/MainPage"
import DetailsPage from "./pages/DetailsPage"
import OrderPage from './pages/OrderPage'

function App() {
  return <Container>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id/:name" element={<DetailsPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  </Container>
}

export default App