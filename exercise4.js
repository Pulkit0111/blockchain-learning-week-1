let book = {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    num_of_pages: 607,
    description: function (){
        return `${this.title} is written by ${this.author} and it has ${this.num_of_pages} as the total number of pages.`
    }
};

console.log(book.description());