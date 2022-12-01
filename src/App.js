import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import EditPost from './pages/EditPost'
import Home from './pages/Home'
import Missing from './pages/Missing'
import NewPost from './pages/NewPost'
import SinglePost from './pages/SinglePost'

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'What is JavaScript?',
      body: 'JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.',
    },
    {
      id: 2,
      dateTime: 'May 02, 2022 11:20:16 PM',
      title: ' Is JavaScript a case-sensitive language?',
      body: 'Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.',
    },
    {
      id: 3,
      dateTime: 'Jan 01, 2021 1:20:31 AM',
      title: 'What are the advantages of JavaScript?',
      body: 'Less server interaction You can validate user input before sending the page off to the server.',
    },
    {
      id: 4,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'What are the ways to define a variable in JavaScript?',
      body: 'Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object.',
    },
    {
      id: 5,
      dateTime: 'July 01, 2021 11:17:36 AM',
      title: 'What is a Typed language?',
      body: 'Typed Language is in which the values are associated with values and not with variables.',
    },
  ])

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleDelete = (id) => {
    console.log(id)
    setPosts(posts.filter((post) => post.id !== id))
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const dateTitme = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {
      id: id,
      dateTime: dateTitme,
      title: postTitle,
      body: postBody,
    }
    setPosts([...posts, newPost])
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleEdit = (id) => {
    const dateTitme = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = {
      id: id,
      dateTime: dateTitme,
      title: editTitle,
      body: editBody,
    }
    setPosts(posts.map((post) => (post.id === id ? { ...updatedPost } : post)))
    setEditTitle('')
    setEditBody('')
    navigate('/')
  }

  return (
    <div className='h-screen bg-slate-700 flex justify-center'>
      <div className='h-screen bg-slate-800 w-full md:w-3/5 flex flex-col justify-between'>
        <Header title='the tech blog 💻' />
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route index element={<Home posts={searchResults} />} />
          <Route path='about' element={<About />} />
          <Route
            path='post'
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                postBody={postBody}
                setPostTitle={setPostTitle}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path='edit/:id'
            element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
              />
            }
          />
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
