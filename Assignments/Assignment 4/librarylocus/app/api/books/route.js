import BooksRepo from "@/app/repo/BooksRepo.js"; //Import the Repo which contains the methods to GET, POST, PUT and DELETE.

export async function GET(request){
    const {searchParams} = new URL(request.url); //Extract the Search Parameters from the URL
    const name = searchParams.get('name');
    const pageCount = searchParams.get('pageCount');
    const author = searchParams.get('author');
    const category = searchParams.get('category');

    if(!name && !pageCount && !author && !category){ //If there are no search parameters
        const response = await BooksRepo.getBooks();
        return Response.json(response,{status:200});

    }else if (name){ //If there is only name
        const bookByName = await BooksRepo.getBook(name);
        return Response.json(bookByName,{status:200});

    }else if (pageCount){//If there is only pageCount
        const pageCountInt = parseInt(pageCount); //parse it into an Integer because the input from url isn't integer.
        const bookByCount = await BooksRepo.getBooksByPageCount(pageCountInt);
        return Response.json(bookByCount,{status:200});

    }else if (author){//If there is only author
        const booksByAuthor = await BooksRepo.getBooksByAuthor(author);
        return Response.json(booksByAuthor,{status: 200});

    }else if (category){//If there is only category
        const booksByCategory = await BooksRepo.getBooksByCategory(category);
        return Response.json(booksByCategory,{status:200});

    }
}

export async function POST(request){
    const BookReceived = await request.json();//wait for the request (new book details)
    const newBook = await BooksRepo.addBook(BookReceived);
    return Response.json(newBook,{status:200});
}