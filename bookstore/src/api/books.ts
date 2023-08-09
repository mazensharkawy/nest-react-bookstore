import axios from "axios"
import { Book } from "../types"


export function getBooks():Promise<Book[]> {
  return axios
    .get("/api/books")
    .then(({data}:{data: Book[]}) => data)
}

export function addBook(book: Book):Promise<Object> {
  return axios
    .post("/api/books", book)
    .then(res => res.data)
}

export function editBook(book: Book) {
  return axios
    .put(`/api/books/${book.id}`, book)
    .then(res => res.data)
}

export function deleteBook(id: number) {
  return axios
    .delete(`/api/books/${id}`)
    .then(res => res.data)
}