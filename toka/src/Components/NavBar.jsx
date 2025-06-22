import React from 'react'
import Logo from './Logo'

export  const NavBar = () => {
    //this is the navigation bar component
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Create',
            link: '/create'
        },
        {
            name: 'Trends',
            link: '/trends'
        },
        {
            name: 'Collections',
            link: '/collections'
        }
    ]

  return (
    <div className=''>
      <div className="container">
        <div className=" absolute px-2 py-3">
            <Logo />
        </div>
      </div>
    </div>
  )
};
