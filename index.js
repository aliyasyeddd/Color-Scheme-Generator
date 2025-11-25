const generateBtn = document.getElementById('generate-color-btn');
const colorPicker = document.getElementById('seed-color');


generateBtn.addEventListener('click', getColorScheme);

function getColorScheme() {
    const seedColor = colorPicker.value;
    const hexValue = seedColor.slice(1);
    const selectedMode = document.getElementById('scheme-selector').value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${selectedMode}&count=5`)
        .then(res => res.json())
        .then(data => console.log(data) );
}