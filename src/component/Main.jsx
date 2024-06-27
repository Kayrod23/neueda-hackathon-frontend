import { Link } from 'react-router-dom'

function Main({client}) {
console.log(client)
  return (
    //bg-white
    //bg-blue-600
    <div className='bg-gray-100 h-screen flex flex-col items-center justify-center text-2xl'>
        <h1 className='self-start ml-[12.5%] mb-2 font-semibold text-blue-900 text-3xl'>Your Accounts</h1> 
        <ul className='bg-white shadow-md rounded flex-rows w-[75%] divide-y divide-gray-200'>
            {client ? client.map((account, index) => {
            return (
                <Link to={`/account/${account.id}`} key={index} className='flex justify-between items-center hover:bg-gray-100 p-2 transition-colors duration-200'>
                    <div className='flex hover:bg-gray-100 p-2 transition-colors duration-200'>
                        <li className='mx-2'>{account.type}</li>
                        <li>**** - {account.routing}</li>
                    </div>
                    <li className='mr-2'>$ {account.balance}</li>
                </Link>)
           }) : null}
        </ul>
    

      <div className="mt-96 absolute -bottom-0.5">
        <a href="http://localhost:8080/swagger-ui/index.html#/" className="text-blue-900 font-semibold sm:text-2xl">Swagger-UI Page</a>
      </div>
    </div>
  )
}

export default Main