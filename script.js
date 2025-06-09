const animals = [
  { name: "Lumba-lumba", code: "pict/lumbalumbahci.png" },
  { name: "Penyu", code: "pict/penyuhci.png" },
  { name: "Kepiting", code: "pict/kepitinghci.png" },
  { name: "Gurita", code: "pict/guritahci.png" },
  { name: "Hiu", code: "pict/hiuhci.png" },
  { name: "Pari", code: "pict/parihci.png" }
];

let current = 0;

function updateDisplay() {
  const barcode = document.getElementById("barcode");
  const name = document.getElementById("animal-name");
  const animal = animals[current];

  // Tampilkan langsung gambar marker dari folder pict
  barcode.src = animal.code;
  name.textContent = animal.name;
}

function nextAnimal() {
  current = (current + 1) % animals.length;
  updateDisplay();
}

function prevAnimal() {
  current = (current - 1 + animals.length) % animals.length;
  updateDisplay();
}

// Tema toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("brown-theme");
    toggleButton.textContent = body.classList.contains("brown-theme") ? "🌞" : "🌙";
  });

  updateDisplay(); // Tampilkan barcode awal
});