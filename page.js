function createBookImage(bookImageSrc) {
    const bookImage = document.createElement('img');
    bookImage.src = bookImageSrc;
    bookImage.alt = ''; // Пустая строка, чтобы избежать появления значка ошибки
    return bookImage;
}

function clearBookInfoContainer() {
    const bookInfoContainer = document.getElementById('bookImg');
    bookInfoContainer.innerHTML = ''; // Очищаем содержимое
}

function addElementToContainer(element) {
    const bookInfoContainer = document.getElementById('bookImg');
    bookInfoContainer.appendChild(element);
}

function openBookPage1(bookImageSrcTemplate, totalImages) {
    clearBookInfoContainer();

    // Создаем и добавляем все изображения
    for (let i = 1; i <= totalImages; i++) {
        // Форматируем номер изображения (01, 02, ..., 11)
        const formattedNumber = i.toString().padStart(2, '0');
        const bookImageSrc = `${bookImageSrcTemplate}${formattedNumber}.jpg`;

        const bookImage = createBookImage(bookImageSrc);
        addElementToContainer(bookImage);
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookId = urlParams.get('id');

// Преобразуем строку в число
const numericBookId = parseInt(bookId, 10);

// Прибавляем 1
const incrementedBookId = numericBookId + 1;

// Используем incrementedBookId для создания шаблона пути к изображению
const bookCoverPathTemplate = `${incrementedBookId}tytle/1глава/`;

// Количество изображений
const totalImages = 11;

// Используем шаблон и количество изображений для создания путей и добавления их в контейнер
openBookPage1(bookCoverPathTemplate, totalImages);
