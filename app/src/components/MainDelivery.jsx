import React from 'react'
import { Link } from 'react-router-dom'

const MainDelivery = () => {
    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/'>
                    <span className='text text--breadcrumbs'>
                        {'<'} на главную
                    </span>
                </Link>

                <div className='delivery-wrapper'>
                    <div className='page-delivery-title-wrapper'>
                        <h1 className='page-delivery-title text text--h3-medium'>
                            Способы доставки
                        </h1>
                    </div>

                    <div className='delivery-info-wrapper'>
                        <div className='delivery-info'></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainDelivery
