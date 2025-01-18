// Fetch book data from the server and update the DOM
fetch('/api/books')
  .then(response => response.json())
  .then(data => {
    const booksContainer = document.getElementById('books-container'); // Container for books
    booksContainer.innerHTML = ''; // Clear any existing content

    data.forEach(book => {
      // Create a container for each book
      const bookElement = document.createElement('div');
      bookElement.classList.add('book-item'); // Add class for styling

      // Add book details
      bookElement.innerHTML = `
        <img src="${book.cover}" alt="${book.title} Cover" class="book-cover">
        <div class="book-info">
          <h2 class="book-title">${book.title}</h2>
          <p class="book-summary">${book.summary}</p>
        </div>
      `;

      // Append the book element to the container
      booksContainer.appendChild(bookElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
