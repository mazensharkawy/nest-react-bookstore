import axios from "axios"
import { Book } from "../types"


export function getBooks():Promise<Book[]> {
  return axios
    .get("http://localhost:3000/api/books")
    .then(({data}:{data: Book[]}) => data)
}

export function addBook(book: Book):Promise<Object> {
  return axios
    .post("http://localhost:3000/api/books", book)
    .then(res => res.data)
}

export function editBook(book: Book) {
  return axios
    .put(`http://localhost:3000/api/books/${book.id}`, book)
    .then(res => res.data)
}

export function deleteBook(id: number) {
  return axios
    .delete(`http://localhost:3000/api/books/${id}`)
    .then(res => res.data)
}