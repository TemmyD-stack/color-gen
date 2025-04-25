const colorsDiv = document.getElementById("colors");
document.getElementById("generate").addEventListener("click", () => {
    const baseColor = document.getElementById("color-picker").value.slice(1);
    const scheme = document.getElementById("scheme").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${scheme}&count=5`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const colors = data.colors;
            
            colorsDiv.innerHTML = "";

            colors.forEach(color => {
                const colorBox = document.createElement("div");
                colorBox.style.backgroundColor = color.hex.value;
                colorBox.classList.add("color-box")
                colorsDiv.appendChild(colorBox);
                const hex = document.createElement("p")
                hex.classList.add("hex")
                hex.innerText = color.hex.value;
            });
        })

}) 