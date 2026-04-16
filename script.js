function getCareer() {
  let selected = document.querySelectorAll("input:checked");
  let values = Array.from(selected).map(el => el.value);

  let result = "Тебе подходят:\n";

  if (values.includes("tech")) {
    result += "Программист, Инженер\n";
  }

  if (values.includes("people")) {
    result += "Врач, Учитель\n";
  }

  if (values.includes("creative")) {
    result += "Дизайнер\n";
  }

  if (values.length === 0) {
    result = "Выбери интересы!";
  }

  document.getElementById("result").innerText = result;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
