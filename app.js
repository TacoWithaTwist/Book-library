var button = document.getElementById("newBook")
var displayButton = document.getElementById("displayBook")
button.addEventListener('click',addBookToLibrary)
displayButton.addEventListener('click',displayBook)
const myLibrary = [{title:'houssein',author:'yes',pages:'100',read:'read'}]

//Book constructor

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return(this.title + this.author + this.pages + this.read)
    }
}

//Add new book to Library

function addBookToLibrary(){
    const inputTitle = prompt("Give new book title")
    const inputAuthor = prompt("Give new book author")
    const inputPages = prompt("Give new book pages")
    const inputRead = prompt("Give new book read or not")
    const newBook = new Book (inputTitle,inputAuthor,inputPages,inputRead)
    console.log(newBook.info())

}

//Display books in library

function displayBook(){
    myLibrary.forEach(book => {
        console.log(book)
    });
}
