import "react"

import { Book } from "../types"
import BookCard from "../common/BookCard"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBook } from "../api/books"


function BookList({ books, }: { books: Book[] }) {

    const queryClient = useQueryClient()
  const deleteBooksMutation = useMutation(deleteBook,{
      onSuccess: () => {
          queryClient.invalidateQueries(['books'])
      }
  })
    return (
        <div className="flex gap-2 flex-wrap">
            {books.map(book => (
                <BookCard book={book} deleteBook={deleteBooksMutation.mutate} key={book.id} />
            ))}
        </div>
    )
}
export default BookList