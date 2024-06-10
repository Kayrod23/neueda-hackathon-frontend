import React from 'react'
import { useParams } from 'react-router-dom';

function Account() {
    let { id } = useParams()

  return (
    <div>Account {id}
        {/* <h1 className='self-start ml-[12.5%] mb-2 font-semibold text-blue-900 text-3xl'>Your Accounts</h1> 
        <ul className='bg-white shadow-md rounded flex-rows w-[75%] divide-y divide-gray-200'>
            {array.map((account, index) => {
            return (
            <Link to={`/account/${index+1}`} key={index}>
                <div className='flex justify-between items-center hover:bg-gray-100 p-2 transition-colors duration-200'>
                    <div className='flex m-2'>
                        <li className='mx-2'>{account.type}</li>
                        <li>...{account.accountNumber}</li>
                    </div>
                    <li className='mr-2'>$ {account.amount}</li>
                </div>
            </Link>)
           })}
        </ul> */}
    </div>
  )
}

export default Account