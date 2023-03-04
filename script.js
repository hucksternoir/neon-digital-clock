const hr = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".seconds");

let clock = setInterval(() => {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  hr.textContent = h;
  min.textContent = m;
  sec.textContent = s;
}, 1000);
