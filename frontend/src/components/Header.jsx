import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' border-b-2 border-blue-400 bg-slate-300'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-3'>
            <Link to='/' >
            <h1 className='text-slate-700 font-bold '>
                Estate
            </h1>
            </Link>
            
             <form className='flex items-center bg-slate-100 border-2 border-blue-400 rounded-md px-2 py-1' >
            <input type="text" placeholder='Search' className='outline-none w-34 sm:w-64' />
            <FaSearch className='text-slate-500' />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/signin'>
                <li className='text-slate-700 hover:underline'>Sign In</li>
                </Link>
            </ul>
        </div>      
    </div>
  )
}
