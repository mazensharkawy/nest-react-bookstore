import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addAuthor, getAuthors } from "../api/authors";

export function AuthorForm () {
    const [name, setName] = useState("")

    const queryClient = useQueryClient()
    const createAuthorsMutation = useMutation(addAuthor,{
        onSuccess: () => {
            queryClient.invalidateQueries(['authors'])
        }
    })
    
    const authorsQuery = useQuery({
        queryKey: ["authors"],
        queryFn: () => getAuthors(),
    })
    const authors = authorsQuery.data!;
    
    function submitAuthor(e) {
        e.preventDefault()
        createAuthorsMutation.mutate({name})
      }
    return (<form onSubmit={submitAuthor} className='flex flex-col'>
<h1 className='text-2xl'>Add an Author</h1>
<input required value={name} onChange={e=>setName(e.target.value)} className='border-2 rounded-md p-2' type="text" placeholder="Author Name"/>
<input required type="submit" value="Add Author" className="bg-blue-500 text-white px-4 py-2 rounded-md"/>
</form>)
} 