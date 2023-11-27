const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const bookDetails = document.getElementById('bookDetails');
const bookshelfList = document.getElementById('bookshelfList');

function searchBooks() {
    const searchTerm = searchInput.value;

    // Use Google Books API to search for books (without an API key)
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displaySearchResults(data.items))
        .catch(error => console.error('Error fetching data:', error));
}

function displaySearchResults(books) {
    searchResults.innerHTML = '';

    if (!books) {
        searchResults.innerHTML = 'No results found.';
        return;
    }

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.volumeInfo.imageLinks?.thumbnail || 'no-image.jpg'}" alt="${book.volumeInfo.title}">
            <h3>${book.volumeInfo.title}</h3>
            <p>${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            <button onclick="viewBookDetails('${book.id}')">View Details</button>
            <button onclick="addToBookshelf('${book.id}', '${book.volumeInfo.title}')">Add to Bookshelf</button>
        `;

        searchResults.appendChild(bookCard);
    });
}

function viewBookDetails(bookId) {
    // Use Google Books API to get details for a specific book (without an API key)
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const book = data.volumeInfo;
            bookDetails.innerHTML = `
                <h2>${book.title}</h2>
                <p>By ${book.authors ? book.authors.join(', ') : 'Unknown Author'}</p>
                <p>${book.description || 'No description available.'}</p>
            `;
        })
        .catch(error => console.error('Error fetching book details:', error));
}

function addToBookshelf(bookId, title) {
    const listItem = document.createElement('li');
    listItem.textContent = title;
    bookshelfList.appendChild(listItem);
}
