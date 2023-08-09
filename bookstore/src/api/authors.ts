import axios from "axios"
import { Author } from "../types"


export function getAuthors():Promise<Author[]> {
  return axios
    .get("http://localhost:3000/api/authors")
    .then(({data}:{data: Author[]}) => data)
}

export function addAuthor(author: Author) {
  return axios
    .post("http://localhost:3000/api/authors", author)
    .then(res => res.data)
}

export function deleteAuthor(id: number) {
  return axios
    .delete(`http://localhost:3000/api/authors/${id}`)
    .then(res => res.data)
}