let t, defaults;

function initTableStyler() {
  const table = document.getElementById("showcase");
  if (!table) return;
  t = table;
  const td = t.tBodies[0]?.rows[0]?.cells[0];
  if (!td) return;
  defaults = {
    w: getComputedStyle(t).width,
    b: getComputedStyle(t).borderWidth,
    p: getComputedStyle(td).padding,
    bg: getComputedStyle(td).backgroundColor
  };
  document.querySelectorAll('[data-width]').forEach(btn =>
    btn.addEventListener('click', () => setWidth(parseInt(btn.dataset.width)))
  );
  document.querySelectorAll('[data-bp]').forEach(btn =>
    btn.addEventListener('click', () => setBP(parseInt(btn.dataset.bp)))
  );
  document.querySelectorAll('[data-bg]').forEach(btn =>
    btn.addEventListener('click', () => setColor(btn.dataset.bg))
  );
  const reset = document.getElementById('reset-btn');
  if (reset) reset.addEventListener('click', resetAll);
}

function setWidth(px) { if (t) t.style.width = px + "px"; }
function setBP(px) {
  if (!t) return;
  const v = px + "px";
  t.style.borderWidth = v;
  t.style.borderSpacing = v;
  t.querySelectorAll("th,td").forEach(c => { c.style.borderWidth = v; });
}

function setColor(c) { if (t) t.querySelectorAll("tbody td").forEach(td => td.style.backgroundColor = c); }

function resetAll() {
  if (!t || !defaults) return;
  t.style.width = defaults.w;
  t.style.borderWidth = defaults.b;
  t.style.borderSpacing = "";
  t.querySelectorAll("th,td").forEach(c => { c.style.borderWidth = ""; c.style.padding = defaults.p; });
  t.querySelectorAll("tbody td").forEach(td => td.style.backgroundColor = defaults.bg);
}

let images = [
    "https://storage.sekai.best/sekai-jp-assets/character/member/res021_no058/card_after_training.webp",
    "https://storage.sekai.best/sekai-jp-assets/character/member/res020_no008/card_after_training.webp",
    "https://storage.sekai.best/sekai-jp-assets/character/member/res019_no024/card_after_training.webp",
    "https://storage.sekai.best/sekai-jp-assets/character/member/res014_no036/card_after_training.webp",
    "https://storage.sekai.best/sekai-jp-assets/character/member/res012_no010/card_after_training.webp"
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("myImage");
  const counter = document.getElementById("counter");
  if (!img || !counter) return;
  img.src = images[index];
  counter.textContent = "Image " + (index + 1) + " / " + images.length;
}

function prevImage() { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(currentIndex); }
function nextImage() { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); }

function initPolaroid() {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  if (!prev || !next) return;
  prev.addEventListener("click", prevImage);
  next.addEventListener("click", nextImage);
  showImage(currentIndex);
}






window.addEventListener("DOMContentLoaded", () => {
  initTableStyler();
  initPolaroid();
});



