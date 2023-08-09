// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import BookList from './bookList'
import { Book } from './types'
import { getBooks } from './api/books'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';

function App() {
  const [searchText, setSearchText] = useState("")
  //filter books by searchText
  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  })
  
  if(booksQuery.status==='loading') return <h1>Loading</h1>
  else if(booksQuery.status==='error') return <h1>Error</h1>
  const books = booksQuery.data!;
  const filteredBooks = books.filter((book:Book) => {
    return book.title.toLowerCase().includes(searchText.toLowerCase())
  })
  

  return (
    <>
    <div className='flex justify-between items-center p-4'>
      <input 
      className='border-2 rounded-md p-2'
      type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <Link  to="add-book" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add </Link>
    </div>
      <BookList books={filteredBooks}/>
    </>
    )
}

export default App
