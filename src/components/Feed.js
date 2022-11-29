import Post from './Post'

const Feed = ({ posts }) => {
  return (
    <section className='flex flex-col gap-2 p-2 rounded-lg'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  )
}
export default Feed
