import BooksRepo from "@/app/repo/BooksRepo.js";

export async function PUT(request,{params}){
    const bookISBN = params.isbn;
    const updatedBook = await request.json();
    const updatedBookObj = await BooksRepo.updateBook(bookISBN,updatedBook);
    return Response.json(updatedBookObj,{status:200});
}

export async function DELETE(request,{params}){
    const BookISBN = params.isbn;
    const books = await BooksRepo.deleteBook(BookISBN);
    return Response.json(books,{status:200});
}