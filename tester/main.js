document.getElementById("generate").addEventListener("click", () => {
  const baseColor = document.getElementById("color-picker").value.slice(1);
  const mode = document.getElementById("mode").value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
      const colorsDiv = document.getElementById("colors");
      colorsDiv.innerHTML = "";

      data.colors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color.hex.value;

        const hexText = document.createElement("span");
        hexText.classList.add("hex");
        hexText.textContent = color.hex.value;

        colorBox.appendChild(hexText);
        colorsDiv.appendChild(colorBox);
      });
    });
});
