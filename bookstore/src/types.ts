//create a book type that has the following properties: { title, author, publicationDate, image }

export type Book = {
    id?: number;
    title: string;
    author?: number|string;
    authorId?: number;
    publicationDate: string;
    image: string;
}

export type Author = {
    id?: number;
    name: string;
}
