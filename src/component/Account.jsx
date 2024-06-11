import React from 'react'
import { useParams } from 'react-router-dom';

function Account() {
    let { id } = useParams()
    let array = [
        {
            id:1,
            type: "Saving",
            amount: 500,
            accountNumber: 1234,
            transactions: [{amount: -500, type: "Withdraw"}, {amount: 300, type: "Deposite"}, {amount: 200, type: "Deposite"} , {amount: -450, type: "Withdraw"}]
        },
        {
            id:2,
            type: "Checking",
            amount: 100,
            accountNumber: 1248,
            transactions: [{amount: 5300, type: "Withdraw"}, {amount: 310, type: "Deposite"}, {amount: 1200, type: "Deposite"} , {amount: -50, type: "Withdraw"}]
        },
        {
            id:3,
            type: "Checking",
            amount: 120,
            accountNumber: 1253,
            transactions: [{amount: -5000, type: "Withdraw"}, {amount: 320, type: "Deposite"}, {amount: 250, type: "Deposite"} , {amount: -550, type: "Withdraw"}]
        }, 
    ]
console.log(array[id-1].transactions)
  return (
    <div className='bg-gray-100 h-screen flex flex-col items-center justify-center text-2xl'>
        <h1 className='self-start ml-[12.5%] mb-2 font-semibold text-blue-900 text-3xl'>Your Transactions in {array[id-1].type} ....{array[id-1].accountNumber}</h1> 
        <ul className='bg-white shadow-md rounded flex-rows w-[75%] divide-y divide-gray-200'>
            {array[id-1].transactions.map((transactions, index) => {
                console.log(transactions.type)
            return (
                <div key={index} className='flex justify-between items-center hover:bg-gray-100 p-2 transition-colors duration-200'>
                    <li className='hover:bg-gray-100 p-2 transition-colors duration-200'>{transactions.type}</li>
                    <li className='mr-2'>$ {transactions.amount}</li>
                    {/* <div className='flex m-2'>
                        <li className='mx-2'>{account.type}</li>
                        <li>...{account.accountNumber}</li>
                    </div>
                    <li className='mr-2'>$ {account.amount}</li> */}
                </div>)
           })}
        </ul>
    </div>
  )
}

export default Account