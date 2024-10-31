import React from 'react'
import { Link } from 'react-router-dom'

const MainLoyalty = () => {
    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/account'>
                    <span className='text text--breadcrumbs'>{'<'} назад</span>
                </Link>

                <div className='loyalty-wrapper'>
                    <div className='page-title-wrapper'>
                        <h1 className='page-title text text--h3-medium'>
                            Система лояльности
                        </h1>
                    </div>

                    <div className='loyalty-info'>
                        <div className='loyalty-user-wrapper'>
                            <div className='loyalty-user'>
                                <div className='loyalty-user-container'>
                                    <h2 className='visually-hidden'>
                                        Имя пользователя
                                    </h2>
                                    <h3 className='loyalty-user-name text text--h3-medium'>
                                        Олеся Силина
                                    </h3>
                                    <div className='loyalty-user-balance-wrapper'>
                                        <span className='loyalty-user-balance text'>
                                            345 баллов
                                        </span>
                                    </div>
                                </div>
                                <div className='loyalty-user-photo-wrapper'>
                                    <img
                                        className='loyalty-user-photo'
                                        src='../images/userphoto.svg'
                                        alt='Фото пользователя'
                                        width='99'
                                        height='99'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='loyalty-about'>
                            <h2 className='visually-hidden'>
                                Условия использования баллов
                            </h2>
                            <ul className='loyalty-about-list'>
                                <li className='loyalty-about-item'>
                                    <span className='text text--description'>
                                        баллы начисляются за каждые 3% от
                                        покупки
                                    </span>
                                </li>
                                <li className='loyalty-about-item'>
                                    <span className='text text--description'>
                                        баллами можно оплатить до 50% от покупки
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainLoyalty
