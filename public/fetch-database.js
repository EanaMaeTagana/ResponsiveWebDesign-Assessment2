// fetch the book data from the server and update the DOM
fetch('/api/books')
  // parse as a JSON response
  .then(response => response.json()) 
  .then(data => {
    // container for books
    const booksContainer = document.getElementById('books-container'); 
    // clear any existing content within the HTML
    booksContainer.innerHTML = ''; 

    // loop through each book within the data
    data.forEach(book => {
      // creates a new <div> element for the book
      const bookElement = document.createElement('div');
      // add a class as "book-item"
      bookElement.classList.add('book-item'); 

      // add the book details (cover, title, and summary) to each container
      // each one is classed individually as per the content it holds
      bookElement.innerHTML = `
        <img src="${book.cover}" alt="${book.title} Cover" class="book-cover">
        <div class="book-info">
          <h2 class="book-title">${book.title}</h2>
          <p class="book-summary">${book.summary}</p>
        </div>
      `;

      // append the content to appear within the main container
      booksContainer.appendChild(bookElement);
    });
  })
  // error handling
  .catch(error => console.error('Error fetching data:', error));
