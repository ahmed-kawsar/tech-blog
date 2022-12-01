import { GrReturn } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const NewPost = ({
  handleSubmit,
  postTitle,
  postBody,
  setPostTitle,
  setPostBody,
}) => {
  return (
    <main className='h-full p-3'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-orange-500'>Add a new post</h2>
        <Link to='/'>
          <div className='bg-slate-200 animate-pulse'>
            <GrReturn />
          </div>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='grid grid-rows-7 gap-2 mt-4'>
        <input
          className='span-1 pl-2 bg-slate-900 text-slate-100 focus:outline-none rounded-sm'
          placeholder='add title'
          type='text'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          className='span-4 pl-2 bg-slate-900 text-slate-100 focus:outline-none h-64 rounded-sm'
          placeholder='write your idea'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button
          type='submit'
          className='span-1 bg-slate-400 rounded-sm hover:bg-slate-500'
        >
          submit
        </button>
      </form>
    </main>
  )
}
export default NewPost
