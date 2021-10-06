let defaultWidth = 150;
let defaultHeight = 100;
let defaultColor = "#000000";

const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const colorInput = document.querySelector("#color");

const widthOutput = document.querySelector("#width-output");
const heightOutput = document.querySelector("#height-output");
const colorOutput = document.querySelector("#color-output");

const output = document.querySelector("#output-box");
const updateOutput = () => {
    output.style.width = `${widthInput.value}px`;
    output.style.height = `${heightInput.value}px`;
    output.style.background = `${colorInput.value}`;
}

const updateProperties = () => {
    widthOutput.innerHTML = `${widthInput.value}px`;
    heightOutput.innerHTML = `${heightInput.value}px`;
    colorOutput.innerHTML = `${colorInput.value}`;
}


widthInput.value = defaultWidth;
heightInput.value = defaultHeight;
colorInput.value = defaultColor;

updateProperties();
updateOutput();

widthInput.addEventListener('input', () => {
    updateProperties();
    updateOutput();
});

heightInput.addEventListener('input', () => {
    updateProperties();
    updateOutput();
});

colorInput.addEventListener('input', () => {
    updateProperties();
    updateOutput();
});
