import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {useState} from "react";
import { addBook } from "../api/books";
import { Navigate } from "react-router-dom";
import { addAuthor, getAuthors } from "../api/authors";
import { AuthorForm } from "./AuthorForm";

function AddBookForm(){
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState<number>()
    const [publicationDate, setPublicationDate] = useState("")

    const queryClient = useQueryClient()
    const createBooksMutation = useMutation(addBook,{
        onSuccess: () => {
            queryClient.invalidateQueries(['books'])
        }
    })

    const authorsQuery = useQuery({
      queryKey: ["authors"],
      queryFn: () => getAuthors(),
    })
    const authors = authorsQuery.data!;
    
    function submitBook(e) {
      e.preventDefault()
      if(!author) return
      createBooksMutation.mutate({title, author, publicationDate, image})
    }
    
  if (createBooksMutation.isSuccess) return <Navigate  to='/' />
    return(
      <div>

        <form onSubmit={submitBook} className='flex flex-col'>
            <h1 className='text-2xl'>Add a book</h1>
            <input required value={title} onChange={e=>setTitle(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Title"/>
            <select required value={author} onChange={e=>{
            console.log({author: e.target.value})
            setAuthor(parseInt(e.target.value))
            }} className='border-2 rounded' placeholder="Author"
            >
                <option value="">Select Author</option>
                {authors && authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
            </select>
            
            <input value={image} onChange={e=>setImage(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Image"/>
            <input required value={publicationDate} onChange={e=>setPublicationDate(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Publication Date"/>
            <input required type="submit" value="Add Book" className="bg-blue-500 text-white px-4 py-2 rounded-md"/>
        </form>
        <AuthorForm/>
      </div>
)}

export default AddBookForm;