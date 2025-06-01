const bookURL ="https://gist.githubusercontent.com/abdalabaaji/85d9b4bab2f811663680b8efc5fc3ffb/raw/35a39261d19a7f28a3e0eb34ae57358969dcd5cf/book-repo.json";

const bookList = document.querySelector("#books-list"); 
const form = document.querySelector("#book-form");
const addBTN = document.querySelector("#add-book");
const cancelBTN = document.querySelector("#cancel");
const updateBTN = document.querySelector("#update-btn");
const searchBar = document.querySelector("#search");
let booksStorage = [];

document.addEventListener('DOMContentLoaded', async () => { //means to let all the HTML code load without the CSS.
    try {
        if(!localStorage.books){
            const BookData = await fetch(bookURL);
            const Books = await BookData.json();
            console.log(Books);
            booksStorage = Books;
            localStorage.books = JSON.stringify(Books);
            DisplayBookLists(Books);
        }else{
            booksStorage = JSON.parse(localStorage.books);
            DisplayBookLists(booksStorage);
        }
    } catch (error) {
        console.error("Failed to load books:", error);
    }
});

searchBar.addEventListener('input',searchHandler);
function searchHandler() {
    const text = searchBar.value;
    console.log(text);
    const filteredBooks = booksStorage.filter((book)=>bookFinder(book,text));
    DisplayBookLists(filteredBooks)
}
function bookFinder(book,text) {
    const newText = text.toLowerCase().trim();
    if(book.title.toLowerCase().includes(newText)){
        return book;
    }else if(book.authors.filter((person)=>person.toLowerCase().includes(newText)).length !=0){
        return book;
    }
}

addBTN.addEventListener('click',addHandler);
function addHandler() {
    form.classList.remove("hidden");
    addBTN.classList.add("hidden");
}

cancelBTN.addEventListener('click',()=>{
    form.classList.add("hidden");
    addBTN.classList.remove("hidden");
})


form.addEventListener('submit',handleSubmission);
function handleSubmission(e){
    e.preventDefault();
    const bookOBJ = formToBook(e.target);

    if(booksStorage.find((book)=>book._id==bookOBJ._id)===undefined){ //book isn't in the list
        booksStorage.unshift(bookOBJ);
        localStorage.books = JSON.stringify(booksStorage);
        DisplayBookLists(booksStorage);
        form.classList.add("hidden");
        addBTN.classList.remove("hidden");
    }else{//book is in the list
        const FoundBook = booksStorage.find((book)=>book._id==bookOBJ._id);

        FoundBook.title = bookOBJ.title;
        FoundBook.authors = bookOBJ.authors;
        FoundBook.isbn = bookOBJ.isbn;
        FoundBook.pageCount = bookOBJ.pageCount;
        FoundBook.longDescription = bookOBJ.longDescription;
        FoundBook.status = bookOBJ.status;
        FoundBook.shortDescription = bookOBJ.shortDescription;
        FoundBook.thumbnailUrl = bookOBJ.thumbnailUrl;
        FoundBook.categories = bookOBJ.categories;

        form.classList.add("hidden");
        addBTN.classList.remove("hidden");
        localStorage.books = JSON.stringify(booksStorage);//save the new booksStorage
        DisplayBookLists(booksStorage);
    }
}
function formToBook(form){
    const formdata = new FormData(form);
    const data = {};
    for([key,value] of formdata){
        if(key==='authors'){
            data[key] = value.split(',').map(author => author.trim());
        }else{
            data[key] = value; 
        }
        
    
    }
    if(!data._id){//if the thing doesn't have an id.
        data._id = Date.now();
    }
    return data;
}

function DisplayBookLists(Books) {
    bookList.innerHTML = Books.map((book)=>bookToHTML(book)).join(' ');
}

function bookToHTML(book) {
    return `<div class="card">
                <img src="${book.thumbnailUrl}">
                <p><b>Title:</b> ${book.title}</p>
                <p><b>Author(s):</b> ${book.authors}</p>
                <p><b>ISBN:</b> ${book.isbn}</p>
                <p><b>Description:</b> ${book.shortDescription}</p>
                <p><b>Status:</b> ${book.status}</p>
                <div class=btn-container>
                    <button class="delete-btn" id="delete-btn" onclick="deleteHandler(${book._id})">Remove</button>
                    <button class="update-btn" id="update-btn" onclick="updateHandler(${book._id})">Update</button>
                </div>
            </div>`    
}
function updateHandler(bookid){
    form.classList.remove("hidden");// show the form

    const book = booksStorage.find((book)=>book._id===bookid);
    // get ref to all form attributes.
    const IDField = document.querySelector("#_id");
    IDField.value = book._id;
    const TitleField = document.querySelector("#title");
    TitleField.value = book.title; 
    const ISBNField = document.querySelector("#isbn");
    ISBNField.value = book.isbn; 
    const PageCountField = document.querySelector("#pageCount");
    PageCountField.value = book.pageCount; 
    const PubDateField = document.querySelector("#publishedDate");
    PubDateField.value = book.publishedDate; 
    const ShortField = document.querySelector("#shortDescription");
    ShortField.value = book.shortDescription; 
    const LongField = document.querySelector("#longDescription");
    LongField.value = book.longDescription; 
    const StatusField = document.querySelector("#status");
    StatusField.value = book.status; 
    const AuthField = document.querySelector("#authors");
    AuthField.value = book.authors; 
    const CatField = document.querySelector("#categories");
    CatField.value = book.categories; 
    const ThumbField = document.querySelector("#thumbnailUrl");
    ThumbField.value = book.thumbnailUrl; 
}
function deleteHandler(bookid) {
    /*
    iterate over the stored books.
    find the book with the id and store it.
    find the index of the stored book.
    splice the array.
    save the array into local storage.
    display the new array.
    */
    const foundBook = booksStorage.find((book)=>book._id==bookid)
    const foundIndex = booksStorage.indexOf(foundBook);
    booksStorage.splice(foundIndex,1);
    localStorage.books = JSON.stringify(booksStorage);
    DisplayBookLists(booksStorage);
}