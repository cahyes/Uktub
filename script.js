//ini fungsi untuk menjadikan konten di dalam editor sebagai gambar (atau di screenshoot)
document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertButton");
  const editor = document.getElementById("editor");

  convertButton.addEventListener("click", function () {
    html2canvas(editor).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "text_image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});

//ini untuk merubah background color gradient
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const editor = document.getElementById("editor");

changeBackgroundBtn.addEventListener("click", () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  editor.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//ini fungsi untuk membuat font pada nyateto-space berubah warna
const nyatetoSpace = document.querySelector(".nyateto-space");
const changeFontColorBtn = document.querySelector("#changeColorFontBtn");

changeFontColorBtn.addEventListener("click", changeRandomColorFont);

function changeRandomColorFont() {
  const randomColor = getRandomColorFont();
  nyatetoSpace.style.color = randomColor;
}

function getRandomColorFont() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//ini fungsi untuk membuat nyatetos-apce langsung false ketika lebih dari max-height
const warn = document.querySelector(".warning");

document.addEventListener("DOMContentLoaded", function () {
  const nyatetoSpace = document.getElementById("tes");
  const nyateto = document.querySelector(".nyateto");
  const nyatetoOverlay = document.createElement("div");
  nyatetoOverlay.className = "nyateto-overlay";

  nyateto.appendChild(nyatetoOverlay);

  nyatetoSpace.addEventListener("input", function () {
    const maxHeight = parseInt(getComputedStyle(nyatetoSpace).maxHeight);
    const contentHeight = nyatetoSpace.scrollHeight;

    if (contentHeight > maxHeight) {
      nyatetoOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      nyatetoOverlay.style.pointerEvents = "auto";
      nyatetoSpace.contentEditable = "false";
      warn.innerHTML = "Catatan penuh, silahkan sederhanakan😉";
    } else {
      warn.innerHTML = "";
    }
  });

  nyatetoOverlay.addEventListener("click", function () {
    nyatetoOverlay.style.backgroundColor = "transparent";
    nyatetoOverlay.style.pointerEvents = "none";
    nyatetoSpace.contentEditable = "false";
  });
});

//ini fungsi untuk mengedit text ketika sudah penuh
function editText() {
  nyatetoSpace.contentEditable = "true";
}
nyatetoSpace.addEventListener("click", editText);

//INI KODE CADANGAN UNTUK MERUBAH CANVAS MENJADI HD ketika editornya kecil
//versi rubah canvasa
// const convertButton = document.getElementById("convertButton");
// convertButton.addEventListener("click", async () => {
//   const editor = document.getElementById("editor");

//   // Buat elemen <canvas> dengan ukuran 1080x1920 piksel
//   const canvas = document.createElement("canvas");
//   canvas.width = 1080;
//   canvas.height = 1920;
//   const context = canvas.getContext("2d");

//   // Gambar elemen "editor" ke dalam canvas
//   await html2canvas(editor, { canvas });

//   // Konversi canvas menjadi gambar dengan ukuran yang diinginkan
//   const dataUrl = canvas.toDataURL("image/png");

//   // Buat elemen <a> untuk memicu pengunduhan
//   const a = document.createElement("a");
//   a.href = dataUrl;
//   a.download = "gambar.png";
//   a.click();
// });
