let myLibrary = [{
    title: "Test Book",
    author: "Ghost Writer",
    pages: 1000,
    info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`
    }
},
{
    title: "Test Book 2",
    author: "Ghost Writer 2",
    pages: 2000,
    info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`
    }
}
]

function Book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function () {
        return `${title} by ${author}, ${pages} pages.`
    }

}

function clearInputs (arr) {
 console.log(arr)
 for (i=0; i < arr.length; i++) {
     arr[i].value = ""
 }
}

function checkValue (arr) {
    let valid = true
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        console.log(ele.value)
        if (!ele.value) {
            valid = false
        }
    }
    console.log('valid:', valid)
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

function showBooks (arr) {
   let bookList = document.getElementById("booklist")
//    console.log(bookList)
   bookList.innerHTML = arr.map((book, i) => {
       return `<div class="book_card"><p>${book.title} by ${book.author}, ${book.pages} pages</p></div><br/><button onClick={deleteBook(${i})}>Remove Book</button>`
   })
}


function pleaseWork () {
    console.log('it worked')
}

showBooks(myLibrary)
