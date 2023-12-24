function showBooks(searchInput) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const booksToShow = filteredBooks.slice(0, 4); // Ограничение вывода до четырех книг

  booksToShow.forEach(book => {
    const li = document.createElement('li');

    // Создаем элемент img для отображения изображения книги
    const img = document.createElement('img');
    img.src = book.image;
    img.alt = `${book.title} cover`;

    li.appendChild(img);

    // Добавляем информацию о книге
    const bookInfo = document.createElement('span');
    bookInfo.textContent = `${book.title} - ${book.author}`;
    li.appendChild(bookInfo);

    // Добавляем обработчик события click для открытия страницы книги
    li.addEventListener('click', function() {
      const bookId = filteredBooks.findIndex(b => b.title === book.title && b.author === book.author);
      openBookPage(bookId);
    });

    bookList.appendChild(li);
  });

  if (filteredBooks.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Книги с похожим названием не найдены';
    bookList.appendChild(li);
  } else if (filteredBooks.length > 4) {
    const li = document.createElement('li');
    bookList.appendChild(li);
  }
}
  // Добавляем обработчик события input для поля ввода
  document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchInput = event.target.value.toLowerCase();
    showBooks(searchInput);
  });
  
  function openBookPage(bookId) {
    const selectedBook = books[bookId];
    if (selectedBook) {
      const url = `book.html?id=${bookId}`; // Перенаправляем на страницу книги с параметром ID
      window.location.href = url;
    }
  }
  // Инициализация при загрузке страницы (показать все книги)
  showBooks('');
  