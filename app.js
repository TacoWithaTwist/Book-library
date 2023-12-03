var button = document.getElementById("newBook")
var displayButton = document.getElementById("displayBook")
button.addEventListener('click',addBookToLibrary)
displayButton.addEventListener('click',displayBook)

function Book(title,author,pages,readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.bookID = `${title[0]+author[0]+pages}` 
    this.changeStatus = function (){
        if(this.readStatus == 'N'){
            this.readStatus = 'Y'
        }else{
            this.readStatus = 'N'
        }
    }
}
const livre = new Book('How to Raise your BABY','Angela Merkel','100','N')
const myLibrary = [livre]


function addBookToLibrary(){
    const dialog = document.getElementById("dialog")
    dialog.showModal();
    const dialogSubmit = document.getElementById("dialogSubmit")
    dialogSubmit.addEventListener("click",function(){
        const test = true
        const title = document.getElementById("title").value
        const author = document.getElementById("author").value
        const pages = document.getElementById("pages").value
        const readStatus = document.getElementById("status").value
        const newBook = new Book(title,author,pages,readStatus)
        myLibrary.push(newBook)
        console.log(myLibrary)
        dialog.close()
    })

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
            const statusButton = document.createElement("button")
            const removeButton = document.createElement("button")
            const cardButtonContainer = document.createElement("div")
            cardButtonContainer.className = "cardButtonContainer"
            removeButton.className = "statusButton"
            removeButton.innerHTML = "Remove Card"
            statusButton.className = "statusButton"
            statusButton.id = "statusButton"
            statusButton.innerHTML = "Change Status"
            cardButtonContainer.appendChild(statusButton)
            cardButtonContainer.appendChild(removeButton)
            card.appendChild(cardButtonContainer)
            container.appendChild(card)
            var ul = document.createElement("ul")
            ul.className = "card-text"
            card.appendChild(ul)
            removeButton.addEventListener("click",function(){
                container.removeChild(card)
            })
            statusButton.addEventListener("click",function(){
                book.changeStatus()
                displayBook()
            })
            for (var key in book){
                if(key == 'changeStatus'){
                    break
                }
                var li = document.createElement("li");
                li.className = "card-text"
                li.innerHTML = `<strong>${key}:</strong> ${book[key]}`;
                ul.appendChild(li)
            }
    });
}