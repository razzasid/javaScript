function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

const theHobbit = new Book(
  "The Game of thrones",
  "George R.R martin",
  512,
  "not read yet"
);

console.log(theHobbit.info())
