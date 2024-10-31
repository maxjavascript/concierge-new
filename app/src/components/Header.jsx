import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='page__header'>
            <header className='page-header'>
                <nav className='page-header__nav'>
                    <div className='page-header__logo'>
                        <Link to='/'>
                            <img
                                src='../images/logo.png'
                                width='72'
                                height='51'
                                alt='Логотип'
                            />
                        </Link>
                    </div>
                    <ul className='page-header__ul'>
                        <li>
                            <div className='search-input-wrapper'>
                                <input className='search-input' type='text' />
                            </div>
                        </li>
                        <li>
                            <Link to='/account'>
                                <img
                                    src='../images/profile.svg'
                                    width='24'
                                    alt='Мой профиль'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to='/cart'>
                                <img
                                    src='../images/cart.svg'
                                    width='24'
                                    height='24'
                                    alt='Корзина'
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
