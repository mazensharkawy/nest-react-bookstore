//update form to accept a book object

//Code snippet from d:\keyward\bookstore\src\BookForm\add.tsx
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "react";
import { editBook } from "../api/books";
import {Navigate, useLocation} from 'react-router-dom'
import { Book } from "../types";
import { useState } from "react";
import { getAuthors } from "../api/authors";
import { AuthorForm } from "./AuthorForm";

function UpdateBookForm() {
    const location = useLocation();
    const book:Book = location.state?.data;
    const [title, setTitle] = useState(book.title)
    const [image, setImage] = useState(book.image)
    const [author, setAuthor] = useState(book.authorId)
    const [publicationDate, setPublicationDate] = useState(book.publicationDate)
    const queryClient = useQueryClient();
    const editBooksMutation = useMutation(editBook, {
        onSuccess: () => {
            queryClient.invalidateQueries(["books"]);
        }
    })

    const authorsQuery = useQuery({
      queryKey: ["authors"],
      queryFn: () => getAuthors(),
    })
    const authors = authorsQuery.data!;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedBook = {id: book.id, title, author, publicationDate, image}
        editBooksMutation.mutate(updatedBook);
    }
    if (editBooksMutation.isSuccess) return <Navigate  to='/' />
    return (
<>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <input value={title} onChange={e=>setTitle(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Title"/>
            
            <select required value={author} onChange={e=>{
            setAuthor(parseInt(e.target.value))
            }} className='border-2 rounded' placeholder="Author"
            >
                <option value="">Select Author</option>
                {authors && authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
            </select>
            
            <input value={image} onChange={e=>setImage(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Image"/>
            <input value={publicationDate} onChange={e=>setPublicationDate(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Publication Date"/>
            <input type="submit" value="Update" className="bg-blue-500 text-white px-4 py-2 rounded-md"/>
        </form>
        <AuthorForm/>
</>
    )
    }
export default UpdateBookForm;