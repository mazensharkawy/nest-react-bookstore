import "react"
import { Book } from "../types"
import trashIcon from "../assets/trash.svg"
import editIcon from "../assets/edit.svg"
import { Link } from "react-router-dom"

const PLACEHOLDER_IMAGE ="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
export default function Card({book, deleteBook}:{book:Book, deleteBook:(id:number)=> void}) {
  const { id, title, author, publicationDate, image } = book
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image||PLACEHOLDER_IMAGE} alt={title} className="object-cover h-48 rounded-lg" />
      <div className="flex justify-end gap-2 w-full p-4">
        <img className="w-6 h-6 cursor-pointer" alt="delete" onClick={()=>id && deleteBook(id)} src={trashIcon}/>
        <Link state={{ data: book }} to="/update-book">
          <img className="w-6 h-6 cursor-pointer" alt="edit" onClick={()=>{}} src={editIcon}/>
        </Link> 
      </div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-gray-500 text-sm">{author}</p>
        <p className="text-gray-500 text-sm">{publicationDate}</p>
      </div>
  )
}