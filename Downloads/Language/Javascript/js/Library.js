console.log("this is forn the Library");

class Library{
    constructor(BookList){
        this.BookList = BookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.BookList.forEach(function(element) {
            console.log(element);
        });
    }
    issueBook(bookName,user){
        if(this.issuedBooks[bookName] == undefined)
        {
            this.issuedBooks[bookName] = user;
         }
         else{
            console.log("This book is already issued");
         }
    }
    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}