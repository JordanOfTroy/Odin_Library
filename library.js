let myLibrary = [{
    title: "Test Book",
    author: "Ghost Writer",
    pages: 1000,
    info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    },
    read : false
},
{
    title: "Placeholder",
    author: "Mr. E",
    pages: 2020,
    info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    },
    read : true
}
]

function Book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function () {
        return `${title} by ${author}, ${pages} pages.`
    },
    this.read = false

}

function showInputs () {
    document.getElementById("bookInfoInputs").style.display = "inline"
    document.getElementById("submitBookBtn").style.display = "inline"
    document.getElementById("addBookBtn").style.display = "none"
}

function hideInputs () {
    document.getElementById("bookInfoInputs").style.display = "none"
    document.getElementById("submitBookBtn").style.display = "none"
    document.getElementById("addBookBtn").style.display = "inline"
}

function clearInputs (arr) {
//  console.log(arr)
 for (i=0; i < arr.length; i++) {
     arr[i].value = ""
 }
 hideInputs()
}

function checkValue (arr) {
    let valid = true
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        // console.log(ele.value)
        if (!ele.value) {
            valid = false
        }
    }
    // console.log('valid:', valid)
    return valid
}

function addBookToLibrary () {
    let info = document.getElementsByClassName("newBookInfo")
    if (!checkValue(info)) {
        alert('Please enter the required info.')
    } else {
        let book = new Book (info[0].value, info[1].value, info[2].value)
        myLibrary.push(book)
        clearInputs(info)
        showBooks(myLibrary)
    }
}

function deleteBook (bookIndex) {
    myLibrary.splice(bookIndex, 1)
    showBooks(myLibrary)
}


function updateReadStatus (ind) {
    // console.log('I am working', ind)
    let book = myLibrary[ind]
    if (book.read) {
        book.read = false
    } else {
        book.read = true
    }
    showBooks(myLibrary)
}

function showBooks (arr) {
    // console.log('myLibrary:', myLibrary)
   let bookList = document.getElementById("booklist")
   bookList.innerHTML = arr.map((book, i) => {
       if (book.read) {
        return `<div class="book_card">
                <p>${book.title} by ${book.author}, ${book.pages} pages, READ</p>
                </div>
                <br/>
                <button onClick={deleteBook(${i})}>Remove Book</button>
                <button onClick={updateReadStatus(${i})}>Mark as Unread</button>`
       } else {
           return `<div class="book_card">
                    <p>${book.title} by ${book.author}, ${book.pages} pages UNREAD</p>
                    </div>
                    <br/>
                    <button onClick={deleteBook(${i})}>Remove Book</button>
                    <button onClick={updateReadStatus(${i})}>Mark as Read</button>`
       }
   })
}



function pleaseWork () {
    console.log('it worked')
}

showBooks(myLibrary)
