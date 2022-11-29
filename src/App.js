import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Missing from './pages/Missing'
import NewPost from './pages/NewPost'
import SinglePost from './pages/SinglePost'

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 01',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 2,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 02',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 3,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 03',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 5,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 05',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 6,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 06',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 7,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 07',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 8,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 08',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
    {
      id: 9,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'post title 09',
      body: 'Lorem ipsum dolor and sit amet consectetur adipisicing elit. Itaque, cum enim! Fugiat.',
    },
  ])

  const navigate = useNavigate()

  const handleDelete = (id) => {
    console.log(id)
    setPosts(posts.filter((post) => post.id !== id))
    navigate('/')
  }

  return (
    <div className='h-screen bg-slate-700 flex justify-center'>
      <div className='h-screen bg-slate-800 w-full md:w-3/5 flex flex-col justify-between'>
        <Header title='the tech blog 💻' />
        <Navbar />
        <Routes>
          <Route index element={<Home posts={posts} />} />
          <Route path='about' element={<About />} />
          <Route path='post' element={<NewPost />} />
          <Route
            path='post/:id'
            element={<SinglePost posts={posts} handleDelete={handleDelete} />}
          />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
