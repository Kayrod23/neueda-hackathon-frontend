import React from 'react'
import Logo from "./citiLogo.png"

function NavBar() {
  return (
    <div className='flex justify-between'>
      <img
        className="w-32 h-auto pl-4 sm: pl-8 md: pl-12 lg: pl-16 my-2 py-2"
        src={Logo}
        alt='logo'
      />
      <div className='w-auto mr-4 p-2 flex items-center justify-between'>
        <p className='mr-8 text-blue-900 font-semibold sm:text-2xl md:text-2xl lg:text-3xl'>
          Welcome, Name
        </p>
        <button className='text-white bg-blue-900 border-solid border-blue-900 pl-2 pr-2 border-2 text-center rounded-lg hover:bg-blue-800 sm:text-2xl md:text-2xl lg:text-3xl'>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default NavBar