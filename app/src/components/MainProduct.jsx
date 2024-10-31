import React from 'react'
import { Link } from 'react-router-dom'

const MainProduct = () => {
    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/products'>
                    <span className='text text--breadcrumbs'>{'<'} назад</span>
                </Link>
                <h1 className='visually-hidden'>Название товара</h1>
                <div className='product-wrapper'>
                    <div className='product'>
                        <div className='images-list-wrapper'>
                            <h2 className='visually-hidden'>Фото товара</h2>
                            <ul className='images-list'>
                                <li className='images-item'>
                                    <div className='img-wrapper'>
                                        <img
                                            src='../images/1-1.png'
                                            alt='Фото 1'
                                            height='221'
                                        />
                                    </div>
                                </li>
                                <li className='images-item'>
                                    <div className='img-wrapper'>
                                        <img
                                            src='../images/1-2.png'
                                            alt='Фото 2'
                                            height='221'
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='size-chart-wrapper'>
                            <div className='size-chart'>
                                <h2 className='visually-hidden'>
                                    Размерная сетка
                                </h2>
                                <div className='product-price-wrapper'>
                                    <p className='name-product'>
                                        топ Zara белый
                                    </p>
                                    <p className='product-price'>4099 руб</p>
                                </div>
                                <div className='product-size-wrapper'>
                                    <p className='product-size-wrapper-title'>
                                        размер
                                    </p>
                                    <ul className='sizes-list'>
                                        <li className='size-item'>
                                            <span className='size-name'>S</span>
                                        </li>
                                        <li className='size-item'>
                                            <span className='size-name'>M</span>
                                        </li>
                                        <li className='size-item'>
                                            <span className='size-name'>L</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='button-add-cart-wrapper'>
                                <div className='button-add-cart'>
                                    <span className='button-add-cart-text'>
                                        добавить в корзину
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='description-product-wrapper'>
                            <div className='description-product'>
                                <h2 className='description-product-text'>
                                    описание
                                </h2>
                                <ul className='description-product-list'>
                                    <li className='description-product-item'>
                                        миди вискозное с оборками на груди из
                                        легкой, дышащей и очень приятной к телу
                                        100% вискозной ткани
                                    </li>
                                    <li className='description-product-item'>
                                        фигурный вырез на груди, открытая
                                        спинка, оборки на груди и спине
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainProduct
