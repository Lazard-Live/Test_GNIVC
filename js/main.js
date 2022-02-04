window.onload = function () {
  // ожидание полной загрузки страницы
  // Просим форму не отправлять данные самостоятельно
  const applicantForm = document.getElementById("form");
  applicantForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault(); // Заглушка отправки формы (отключаем перезагрузку)

    let word = document.querySelector('input[id="word"]'); // берем слово введенное пользователем
    let radio = document.querySelector('input[name="settings"]:checked'); // находим что выбрано пользователем из падежей
    let result = document.querySelector('label[id="result"]'); // находим label для вывода
    let letter; // для последних букв
    let nWord = ""; // для записи обрезанного слова (при необходимости)
    let mEndings = []; // для массивов окончаний падежей
    let lDel = 1; // стандатное значение обрезки слова (кол. символов)

    // проверяем на исключение
    if (word.value.slice(word.value.length - 2) === "ок") {
      lDel = 2;
      letter = word.value.slice(word.value.length - 2);
    } else {
      letter = word.value.slice(word.value.length - 1);
    }

    // проверяем, что за окончание подходит (максимально упростил... можно очень много чего добавить...)
    if (letter === "а") {
      mEndings = ["a", "и", "е", "у", "ой", "е"];
      nWord = word.value.slice(0, -lDel);
      result.textContent = nWord + mEndings[radio.value];
    }

    if (
      letter === "б" ||
      letter === "в" ||
      letter === "м" ||
      letter === "г" ||
      letter === "д" ||
      letter === "л" ||
      letter === "ж" ||
      letter === "з" ||
      letter === "к" ||
      letter === "н" ||
      letter === "п" ||
      letter === "т" ||
      letter === "ф" ||
      letter === "ч" ||
      letter === "ц" ||
      letter === "щ" ||
      letter === "р" ||
      letter === "х"
    ) {
      mEndings = ["", "а", "у", "а", "ом", "е"];
      nWord = word.value;
      result.textContent = nWord + mEndings[radio.value];
    }

    if (letter === "о") {
      mEndings = ["о", "а", "у", "о", "ом", "е"];
      nWord = word.value.slice(0, -lDel);
      result.textContent = nWord + mEndings[radio.value];
    }

    if (letter === "с" || letter === "ш") {
      mEndings = ["", "", "у", "", "ом", "е"];
      nWord = word.value;
      result.textContent = nWord + mEndings[radio.value];
    }

    if (letter === "ок") {
      mEndings = ["ок", "ка", "ку", "ка", "ком", "ке"];
      nWord = word.value.slice(0, -lDel);
      result.textContent = nWord + mEndings[radio.value];
    }

    if (letter === "ь") {
      mEndings = ["ь", "и", "и", "ь", "ью", "и"];
      nWord = word.value.slice(0, -lDel);
      result.textContent = nWord + mEndings[radio.value];
    }
  }
};
