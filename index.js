const generateBtn = document.getElementById('generate-color-btn');
const colorPicker = document.getElementById('seed-color');
const colorPalette = document.getElementById('color-palette');
const selectedMode = document.getElementById('scheme-selector').value;


generateBtn.addEventListener('click', getColorScheme);

function getColorScheme() {
    const seedColor = colorPicker.value;
    const hexValue = seedColor.slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${selectedMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            renderColorPalette(data.colors);
        })
}

function renderColorPalette(colors) {
  let colorPaletteHTML = '';
            for (let color of colors) {
                colorPaletteHTML += `
                       <div class="color-item">
                         <img src="${color.image.bare}" alt="${color.name.value}" class="color-swatch"/> 
                         <p class="color-hex" style="color:${color.hex.value}">${color.hex.value}</p> 
                       </div>
                `
            }
            colorPalette.innerHTML = colorPaletteHTML;
}