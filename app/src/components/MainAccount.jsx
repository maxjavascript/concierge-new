import React from 'react'
import { Link } from 'react-router-dom'

const MainAccount = () => {
    return (
        <div className='page__main'>
            <main className='page-main'>
                <h1 className='visually-hidden'>Личный кабинет</h1>
                <Link className='breadcrumbs' to='/'>
                    <span className='text text--breadcrumbs'>
                        {'<'} на главную
                    </span>
                </Link>
                <div className='options-wrapper'>
                    <ul className='options-list'>
                        <li className='options-item'>
                            <Link className='options-link' to='/history'>
                                <span className='text text--h3-medium'>
                                    История заказов
                                </span>
                            </Link>
                        </li>
                        <li className='options-item'>
                            <Link className='options-link' to='/loyalty'>
                                <span className='text text--h3-medium'>
                                    Система лояльности
                                </span>
                            </Link>
                        </li>
                        <li className='options-item'>
                            <Link className='options-link' to='/favorites'>
                                <span className='text text--h3-medium'>
                                    Избранное
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default MainAccount
