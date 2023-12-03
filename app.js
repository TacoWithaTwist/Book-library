var button = document.getElementById("newBook")
var displayButton = document.getElementById("displayBook")
button.addEventListener('click',addBookToLibrary)
displayButton.addEventListener('click',displayBook)
const myLibrary = [{title:'How to Raise your BABY',author:'Angela Merkel',pages:'100',status:'unread'}]


function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = read
}


function addBookToLibrary(){
    const title = prompt("Give new book title")
    const author = prompt("Give new book author")
    const pages = prompt("Give new book pages")
    const status = prompt("Give new book read or not")
    const newBook = new Book (title,author,pages,status)
    myLibrary.push(newBook)
    console.log(myLibrary)

}

function displayBook(){
    const container = document.getElementById("container")
    const getCard = document.getElementById("cards")
    while(getCard){
        const getCard = document.getElementById("cards")
        if(!getCard){
            break
        }
        container.removeChild(getCard)
    }
    myLibrary.forEach(book => {
            const card = document.createElement("div")
            card.className = "cards"
            card.id = "cards"
            container.appendChild(card);
            var ul = document.createElement("ul");
            ul.className = "card-text"
            card.appendChild(ul)
            for (var key in book){
                var li = document.createElement("li");
                li.className = "card-text"
                li.innerHTML = `<strong>${key}:</strong> ${book[key]}`;
                ul.appendChild(li)
            }
    });
}
