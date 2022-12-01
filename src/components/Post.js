import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <article className='bg-slate-900 p-3 hover:bg-slate-700'>
      <Link to={`post/${post.id}`}>
        <h3 className='text-orange-400 text-lg font-bold'>{post.title}</h3>
      </Link>
      <p className='text-xs text-slate-400'>{post.dateTime}</p>
      <p className='text-slate-300 font-thin'>
        {post.body.length <= 80 ? post.body : `${post.body.slice(0, 80)}...`}
      </p>
    </article>
  )
}
export default Post
