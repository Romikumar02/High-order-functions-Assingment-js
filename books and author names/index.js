// list of books
const books = [
    {title: 'book1', author: 'author 1', year: 2005},
    {title: 'book2', author: 'author 2', year: 20015},
    {title: 'book3', author: 'author 3', year: 2011},
    {title: 'book4', author: 'author 4', year: 2001},
    {title: 'book5', author: 'author 5', year: 2018},
]

// filtering the book published after 2010

const recentbooks = books.filter((book)=> book.year >= 2010);

// use the map function to create a new array with the author names capitalized
const capitalizedauthors = recentbooks.map((element)=>{
    return {title: element.title, author: element.author.toUpperCase(), year: element.year}

})
// print the original list of books , the filtered list of books 

console.log("original list of books:",books)
console.log("recent books(published after 2010):",recentbooks)
console.log("recent books with capitalized author names",  capitalizedauthors)