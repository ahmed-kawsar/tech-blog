import { Link } from 'react-router-dom'

const Header = ({ title }) => {
  return (
    <header className='bg-slate-900 p-2 h-12 font-bold text-orange-400'>
      <Link to='/'>
        <h2 className='text-2xl text-center'>{title}</h2>
      </Link>
    </header>
  )
}
export default Header
