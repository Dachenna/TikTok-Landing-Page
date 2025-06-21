import React from 'react'
import Logo from '../Assets/Logo.png';

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
    <div className='bg-[#201C2D]'>
      <div className="container">
        <div className="absolute top-0 left-0 z-50 ">
            <img src={Logo} alt="Toka Logo" className="w-10 h-10 mx-4 my-2" />
        </div>
      </div>
    </div>
  )
};
