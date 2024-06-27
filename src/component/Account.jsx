import React from 'react'
import { useParams } from 'react-router-dom';

function Account({client}) {
    let { id } = useParams()

  return (
    <div className='bg-gray-100 h-screen flex flex-col items-center justify-center text-2xl'>
        <h1 className='self-start ml-[12.5%] mb-2 font-semibold text-blue-900 text-3xl'>Your Transactions in {client ? client[id-1].type : null} **** - {client ? client[id-1].routing : null}</h1> 
        <ul className='bg-white shadow-md rounded flex-rows w-[75%] divide-y divide-gray-200'>
            {client ? client[id-1].transactionHistory.map((transactions, index) => {
            return (
                <div key={index} className='flex justify-between items-center hover:bg-gray-100 p-2 transition-colors duration-200'>
                    <li className='hover:bg-gray-100 p-2 transition-colors duration-200'>{transactions > 0 ? "Deposited" : "Withdrew"}</li>
                    <li className='mr-2'>$ {transactions}</li>
                </div>)
           }) : null}
        </ul>
    </div>
  )
}

export default Account