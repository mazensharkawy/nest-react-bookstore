import axios from "axios"
import { Author } from "../types"


export function getAuthors():Promise<Author[]> {
  return axios
    .get("/api/authors")
    .then(({data}:{data: Author[]}) => data)
}

export function addAuthor(author: Author) {
  return axios
    .post("/api/authors", author)
    .then(res => res.data)
}

export function deleteAuthor(id: number) {
  return axios
    .delete(`/api/authors/${id}`)
    .then(res => res.data)
}