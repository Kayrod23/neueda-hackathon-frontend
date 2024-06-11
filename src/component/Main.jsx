import React from 'react'
import { Link } from 'react-router-dom'

let array = [
    {
        id:1,
        type: "Saving",
        amount: 500,
        accountNumber: 1234,
        transactions: [-500, 300, 200, -450]
    },
    {
        id:2,
        type: "Checking",
        amount: 100,
        accountNumber: 1248,
    },
    {
        id:3,
        type: "Checking",
        amount: 120,
        accountNumber: 1253,
    }, 
]

function Main() {
  return (
    //bg-white
    //bg-blue-600
    <div className='bg-gray-100  h-screen flex flex-col items-center justify-center text-2xl'>
        <h1 className='self-start ml-[12.5%] mb-2 font-semibold text-blue-900 text-3xl'>Your Accounts</h1> 
        <ul className='bg-white shadow-md rounded flex-rows w-[75%] divide-y divide-gray-200'>
            {array.map((account, index) => {
            return (
            <Link to={`/account/${account.id}`} key={index}>
                <div className='flex justify-between items-center hover:bg-gray-100 p-2 transition-colors duration-200'>
                    <div className='flex m-2'>
                        <li className='mx-2'>{account.type}</li>
                        <li>...{account.accountNumber}</li>
                    </div>
                    <li className='mr-2'>$ {account.amount}</li>
                </div>
            </Link>)
           })}
        </ul>
    </div>
  )
}

export default Main