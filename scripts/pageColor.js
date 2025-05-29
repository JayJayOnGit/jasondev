const root = document.querySelector(":root");
const urlParams = new URLSearchParams(window.location.search);

const col = urlParams.get("col");

if (col) {
  const main = "#" + col;
  const second = darkenHex(main);

  root.style.setProperty("--main", main);
  root.style.setProperty("--second", second);
}

function darkenHex(hex, factor = 0.5) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((ch) => ch + ch)
      .join("");
  }

  const r = Math.floor(parseInt(hex.slice(0, 2), 16) * factor);
  const g = Math.floor(parseInt(hex.slice(2, 4), 16) * factor);
  const b = Math.floor(parseInt(hex.slice(4, 6), 16) * factor);

  const toHex = (val) => val.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
