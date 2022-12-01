import { useEffect } from 'react'
import { GrReturn } from 'react-icons/gr'
import { useParams, Link } from 'react-router-dom'

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])

  return (
    <main className='h-full p-3'>
      {editTitle && (
        <>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold text-2xl text-orange-500'>Edit Post</h2>
            <Link to='/'>
              <div className='bg-slate-200 animate-pulse'>
                <GrReturn />
              </div>
            </Link>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='grid grid-rows-7 gap-2 mt-4'
          >
            <input
              className='span-1 pl-2 bg-slate-900 text-slate-100 focus:outline-none rounded-sm'
              placeholder='add title'
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              className='span-4 pl-2 bg-slate-900 text-slate-100 focus:outline-none h-64 rounded-sm'
              placeholder='write your idea'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              onClick={() => handleEdit(post.id)}
              className='span-1 bg-slate-400 rounded-sm hover:bg-slate-500'
            >
              submit
            </button>
          </form>
        </>
      )}
    </main>
  )
}
export default EditPost
