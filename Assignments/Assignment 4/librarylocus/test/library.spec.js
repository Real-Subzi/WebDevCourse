import { expect, use } from 'chai';
import chaiHttp from 'chai-http';

const { request } = use(chaiHttp)

describe('GET all books route', () => {
    it('it should return an array and a status of 200', (done) => request('http://localhost:3000')
        .get('/api/books').end((err, res) => {
            if (err) {
                done(err); //check if there is an error or not.
            } else {
                expect(res).to.have.status(200); //status should be OK (200), if not there is something wrong
                expect(res.body).to.be.an('array'); //when returning all the books it will be in format of array
                done(); //needed because it is web application
            }
        }))
})

describe('GET a book by name', () => {
    it('It should return one book object and status 200', (done) => request('http://localhost:3000')
        .get('/api/books?name=osgi').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object')
                done();
            }
        })
    )
})

describe('GET books by pageCount', () => {
    it('It should return an array of books, where the pagecounts are equal or higher than this number(700), status=200', (done) => request('http://localhost:3000')
        .get('/api/books?pageCount=700').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                const book = res.body.find((book) => book.pageCount < 700);
                expect(book).to.be.undefined;
                done();
            }
        })
    )
})

describe('GET All books by specified Author', () => {
    it('It should return an array of books, where at least one of the authors is this person, status=200', (done) => request('http://localhost:3000')
        .get('/api/books?author=Peter').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                const books = res.body;
                const Pbooks = books.filter((book) => {
                    //console.log(book.authors)
                    return book.authors.some(author => author.includes('Peter'));
                })
                expect(Pbooks).to.not.be.empty;
                done();
            }
        })
    )
})

describe('GET All books by specified Category', () => {
    it('It should return an array of books where all the categories are the ones specified, status=200', (done) => request('http://localhost:3000')
        .get('/api/books?category=microsoft').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            }
        })
    )
})

describe('GET Summary', () => {
    it('It should return an Array of authors and book numbers, status=200', (done) => request('http://localhost:3000')
        .get('/api/books?summary').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            }
        })
    )
})

describe('POST/add a book', () => {
    it('It should return an object of the book added, status=200', (done) => {
        const BookToAdd = {
            title: "Ikea Box",
            isbn: "50259794",
            pageCount: 123,
            publishedDate: "2008-12-21T00:00:00.000-0800",
            thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOSMP6LCcxGwh_Q_k2UJMwrzvwqCkN36xVT1SgZJkcA&s",
            shortDescription: "This book is awesome",
            longDescription: "This book is awesome,cool,amazing and fantastic",
            status: "PUBLISH",
            authors: ["Jimmy Jim-Jim", "Marcus McDonalds"],
            categories: ["Qatar", "University"]
        }
        request('http://localhost:3000').post('/api/books').send(BookToAdd).end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object'); //Check if the object is returned
                expect(res.body).to.have.property('id'); //confirm that ID has been added
                expect(res.body.title).to.equal('Ikea Box'); //check if object has same name
                expect(res.body.isbn).to.equal("50259794") //check if the object has the same ISBN number.
                done();
            }
        })
    })
})

// describe('PUT/update a book', () => { second })
describe('PUT/update a book', () => {
    it('It should return an object of the book with changed ISBN, status=200', (done) => {
        const BookToAdd = {
            title: "Ikea Box",
            isbn: "11223344",
            pageCount: 123,
            publishedDate: "2008-12-21T00:00:00.000-0800",
            thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOSMP6LCcxGwh_Q_k2UJMwrzvwqCkN36xVT1SgZJkcA&s",
            shortDescription: "This book is awesome",
            longDescription: "This book is awesome,cool,amazing and fantastic",
            status: "PUBLISH",
            authors: ["Jimmy Jim-Jim", "Marcus McDonalds"],
            categories: ["Qatar", "University"]
        }
        request('http://localhost:3000').put('/api/books/50259794').send(BookToAdd).end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object'); //Check if the object is returned
                expect(res.body).to.have.property('id'); //confirm that ID has been added
                expect(res.body.title).to.equal('Ikea Box'); //check if object has same name
                expect(res.body.isbn).to.equal("11223344") //check if the object has the new ISBN number.
                done();
            }
        })
    })
})

describe('DELETE a book',()=> {
    it('It should delete the book and there shouldnt be an instance of it, status=200',(done)=>{
        request('http://localhost:3000').delete('/api/books/11223344').end((err, res) => {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                const newbooklist = res.body;
                expect(newbooklist.find((book)=>book.title==='Ikea box')).to.be.undefined;
                done();
            }
        })
    })
})