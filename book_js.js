const books = [
  { id: 0,title: "Жнец дрейфующей луны", author: "Woo Gak", image: "1tytle/logo.jpg" },
  { id: 1,title: "Элисед", author: "Son Jae Ho", image: "2tytle/logo.jpg" },
  { id: 2,title: "1 секунда", author: "Sini", image: "3tytle/logo.jpg" },
  { id: 3,title: "Игрок 1-го уровня", author: "Song Chi Hyeon", image: "4tytle/logo.jpg" },
  { id: 4,title: "Регрессия актёра", author: "Kim Haema", image: "5tytle/logo.jpg" },
  { id: 5,title: "Чёрное солнце", author: "BlackSunManga", image: "6tytle/logo.jpg" }
];

function clearBookInfoContainer() {
  const bookInfoContainer = document.getElementById('bookInfo');
  bookInfoContainer.innerHTML = '';
}

  
function createBookImage(book) {
  const bookImage = document.createElement('img');
  bookImage.src = book.image;
  return bookImage;
}


function createBookTitle(book) {
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;
  return bookTitle;
}

function createBookAuthor(book) {
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Автор: ${book.author}`;
  return bookAuthor;
}

function addElementToContainer(element) {
  const bookInfoContainer = document.getElementById('bookInfo');
  bookInfoContainer.appendChild(element);
}


function openBookPage(bookId) {
  const selectedBook = books[bookId];

  if (selectedBook) {
    clearBookInfoContainer();

    // Create and add elements individually
    const bookImage = createBookImage(selectedBook);
    addElementToContainer(bookImage);

    const bookTitle = createBookTitle(selectedBook);
    addElementToContainer(bookTitle);

    const bookAuthor = createBookAuthor(selectedBook);
    addElementToContainer(bookAuthor);
  }
}


  // Определение ID книги из URL-адреса страницы
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const bookId = urlParams.get('id');
  
  if (bookId !== null) {
    openBookPage(bookId);
  }
  

  document.getElementById('button1').addEventListener('click', function() {
    // Отримання ID книги з URL або іншим способом
    
    const firstPageUrl = ` page.html?id=${bookId}&page=1`;

    // Перенаправлення на сторінку відображення книги
    window.location.href = firstPageUrl;
});
