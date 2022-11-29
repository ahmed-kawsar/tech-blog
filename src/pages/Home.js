import Feed from '../components/Feed'

const Home = ({ posts }) => {
  return (
    <main className='h-full flex flex-col overflow-y-auto'>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className='p-3 text-orange-500 text-xl'>No Posts!</p>
      )}
    </main>
  )
}
export default Home
