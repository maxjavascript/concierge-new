import React from 'react'
import { Link } from 'react-router-dom'

const MainCart = () => {
    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/'>
                    <span className='text text--breadcrumbs'>
                        {'<'} на главную
                    </span>
                </Link>
                <div className='cart-page-title-wrapper'>
                    <h1 className='cart-page-title'>Корзина</h1>
                </div>
                <div className='cart-wrapper'>
                    <div className='cart'>
                        <ul className='cart-list-items'>
                            <li className='cart-item'>
                                <div className='cart-item-img-wrapper'>
                                    <img
                                        className='cart-item-img'
                                        src='https://leningradec.com/wp-content/uploads/2024/03/43202154DJ_13_f.jpg'
                                        alt='Фото товара'
                                        width='100'
                                        height='110'
                                    />
                                </div>
                                <div className='cart-item-info-wrapper'>
                                    <h2 className='cart-item-name'>топ Zara</h2>
                                    <p className='cart-item-size'>S</p>
                                    <p className='cart-item-number-quantity'>
                                        1 шт
                                    </p>
                                </div>
                                <div className='cart-item-price-wrapper'>
                                    <p className='cart-item-price'>4099 руб</p>
                                </div>
                            </li>
                            <li className='cart-item'>
                                <div className='cart-item-img-wrapper'>
                                    <img
                                        className='cart-item-img'
                                        src='https://leningradec.com/wp-content/uploads/2024/03/43202154DJ_13_f.jpg'
                                        alt='Фото товара'
                                        width='100'
                                        height='110'
                                    />
                                </div>
                                <div className='cart-item-info-wrapper'>
                                    <h2 className='cart-item-name'>топ Zara</h2>
                                    <p className='cart-item-size'>S</p>
                                    <p className='cart-item-number-quantity'>
                                        1 шт
                                    </p>
                                </div>
                                <div className='cart-item-price-wrapper'>
                                    <p className='cart-item-price'>4099 руб</p>
                                </div>
                            </li>
                        </ul>

                        <div className='about-order-wrapper'>
                            <div className='about-order'>
                                <h2 className='about-order-title'>
                                    Сумма заказов
                                </h2>
                            </div>
                            <ul className='about-order-description'>
                                <li className='about-order-description-item'>
                                    <h3 className='about-order-description-title'>
                                        Товары
                                    </h3>
                                    <p className='about-order-description-sum'>
                                        8 198 руб
                                    </p>
                                </li>
                                <li className='about-order-description-item'>
                                    <h3 className='about-order-description-title'>
                                        Доставка выбрать
                                    </h3>
                                    <p className='about-order-description-sum'>
                                        8 198 руб
                                    </p>
                                </li>
                            </ul>
                            <div className='promocode-wrapper'>
                                <h3 className='promocode-wrapper-title'>
                                    Промокод
                                </h3>
                                <input
                                    className='promocode-input'
                                    type='text'
                                />
                            </div>
                            <div className='results-order-item'>
                                <p className='results-order-item-title'>
                                    Итого
                                </p>
                                <p className='results-order-item-value'>
                                    8 198 руб
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-button-wrapper'>
                    <Link className='cart-button' to='/'>
                        Перейти к оплате
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default MainCart
