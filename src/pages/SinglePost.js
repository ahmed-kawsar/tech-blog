import { Link, useParams } from 'react-router-dom'
import { GrReturn } from 'react-icons/gr'

const SinglePost = ({ posts, handleDelete }) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main className='h-full flex overflow-y-auto'>
      <section className='p-3'>
        <article>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold text-2xl text-orange-500'>{post.title}</h2>
            <Link to='/'>
              <div className='bg-slate-200 animate-pulse'>
                <GrReturn />
              </div>
            </Link>
          </div>

          <p className='py-2'>
            <span className='text-xs text-slate-400 rounded-sm'>
              {post.dateTime}
            </span>
          </p>
          <p className='text-slate-200'>{post.body}</p>
          <div className='mt-5 flex gap-2'>
            <Link to={`../edit/${post.id}`}>
              <button className='bg-slate-400 hover:bg-slate-500 px-2'>
                edit
              </button>
            </Link>
            <button
              className='bg-orange-400 hover:bg-orange-500 px-2'
              onClick={() => handleDelete(post.id)}
            >
              delete
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}
export default SinglePost
