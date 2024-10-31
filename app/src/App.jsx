import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import CategoriesPage from './pages/CategoriesPage'
import DeliveryPage from './pages/DeliveryPage'
import LoyaltyPage from './pages/LoyaltyPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import './styles/index.scss'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/delivery' element={<DeliveryPage />} />
                <Route path='/loyalty' element={<LoyaltyPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/product' element={<ProductPage />} />
            </Routes>
        </Router>
    )
}

export default App
