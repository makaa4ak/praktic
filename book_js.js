const books = [
    { title: "Жнец дрейфующей луны", author: "Woo Gak", image: "1tytle/logo.jpg" },
    { title: "Элисед", author: "Son Jae Ho", image: "2tytle/logo.jpg" },
    { title: "1 секунда", author: "Sini", image: "3tytle/logo.jpg" },
    { title: "Игрок 1-го уровня", author: "Song Chi Hyeon", image: "4tytle/logo.jpg" },
    { title: "Регрессия актёра", author: "Kim Haema", image: "5tytle/logo.jpg" },
    { title: "Чёрное солнце", author: "BlackSunManga", image: "6tytle/logo.jpg" }
  ];
  
  
  function openBookPage(bookId) {
    const selectedBook = books[bookId];
    if (selectedBook) {
      const bookInfoContainer = document.getElementById('bookInfo');
      bookInfoContainer.innerHTML = ''; // Очищаем содержимое контейнера перед добавлением новой информации

      // Создаем элементы для отображения информации о книге
      const bookImage = document.createElement('img');
      bookImage.src = selectedBook.image;
      bookImage.alt = `${selectedBook.title} cover`;
   
   
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = selectedBook.title;
  
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Автор: ${selectedBook.author}`;
  

  
      // Добавляем созданные элементы в контейнер для отображения информации о книге
      bookInfoContainer.appendChild(bookImage);
      bookInfoContainer.appendChild(bookTitle);
      bookInfoContainer.appendChild(bookAuthor);   
     }
  }
  
  // Определение ID книги из URL-адреса страницы
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const bookId = urlParams.get('id');
  
  if (bookId !== null) {
    openBookPage(bookId);
  }
  