import React from 'react'
import { Link } from 'react-router-dom'

const MainProducts = () => {
    const ClothesItems = [
        { name: 'Штаны', link: '/product' },
        { name: 'Футболки', link: '/product' },
        { name: 'Куртки', link: '/product' },
        { name: 'Штаны', link: '/product' },
        { name: 'Футболки', link: '/product' },
        { name: 'Куртки', link: '/product' },
        { name: 'Штаны', link: '/product' },
        { name: 'Футболки', link: '/product' },
        { name: 'Куртки', link: '/product' },
    ]

    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/categories'>
                    <span className='text text--breadcrumbs'>{'<'} назад</span>
                </Link>
                <h1 className='visually-hidden'>Товары</h1>
                <div className='products-wrapper'>
                    <div className='products'>
                        <div className='products-title'>
                            <h2 className='text text--h2'>T-Shirts</h2>
                        </div>
                        <div className='products-list-wrapper'>
                            <ul className='products-list'>
                                {ClothesItems.map((item, index) => (
                                    <li key={index} className='product-item'>
                                        <Link to={item.link}>
                                            <div className='product-image'></div>
                                            <h3 className='text text--h3'>
                                                {item.name}
                                            </h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainProducts
