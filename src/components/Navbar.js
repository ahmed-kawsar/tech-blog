import { Link } from 'react-router-dom'

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className='bg-slate-300  py-1 px-2 flex justify-between items-center h-12'>
      <form>
        <input
          className='px-2 py-1 w-64 rounded-sm bg-slate-900 text-slate-200 focus:outline-none'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search'
        />
      </form>
      <ul className='flex justify-between items-center'>
        <li>
          <Link to='/'>
            <span className='px-1 hover:text-orange-900 font-semibold'>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to='about'>
            <span className='px-1 hover:text-orange-900 font-semibold'>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link to='post'>
            <span className='px-1 hover:text-orange-900 font-semibold'>
              Post
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
