import React from 'react'
import Logo from "./citiLogo.png"
import { Link } from 'react-router-dom'

function NavBar({client}) {
  console.log(client)
  return (
    //bg-blue-600
    //bg-white
    <div className="fixed top-0 left-0 w-full bg-white-500 shadow-md" >
      <div className='flex justify-between'>
        <Link to="/">
          <img
            className="w-32 h-auto pl-4 sm: pl-8 md: pl-12 lg: pl-16 my-2 py-2"
            src={Logo}
            alt='logo'
          />
        </Link>
        <div className='w-auto mr-4 p-2 flex items-center justify-between'>
          <p className='mr-8 text-blue-900 font-semibold sm:text-2xl md:text-2xl lg:text-3xl'>
            Welcome, {client[0].clientName}
          </p>
          <button className='text-white bg-blue-900 border-solid border-blue-800 pl-2 pr-2 border-2 text-center rounded-lg hover:bg-blue-600 sm:text-2xl md:text-2xl lg:text-3xl'>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar