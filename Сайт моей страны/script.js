function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Показываем модальное окно
    modalImg.src = src; // Устанавливаем источник изображения
    captionText.innerHTML = ""; // Можно добавить подпись к картинке
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Скрываем модальное окно
}