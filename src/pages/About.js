import { GrReturn } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='h-full p-3'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-orange-500'>About</h2>
        <Link to='/'>
          <div className='bg-slate-200 animate-pulse'>
            <GrReturn />
          </div>
        </Link>
      </div>
      <p className='mt-3 text-slate-100'>
        This blog application is created with reactjs and it is a frontend
        application. This is interactive. It has create, read, update and delete
        features. It has also search features. This application is fully single
        page application.
      </p>
    </main>
  )
}
export default About
