const textInput = document.querySelector('.text-area--input');
const textOutput = document.querySelector('.text-area--output');
const btnFormat = document.querySelector('.controls__button--format');
const btnMinify = document.querySelector('.controls__button--minify');
const btnClear = document.querySelector('.controls__button--clear');

btnFormat.addEventListener('click',() => {
    const formatted = JSON.parse(textInput.value);
    textOutput.value = JSON.stringify(formatted, null, 4);
})

btnMinify.addEventListener('click',()=> {
    const minified = JSON.parse(textInput.value);
    textOutput.value = JSON.stringify(minified);
})

btnClear.addEventListener('click', () => {
    textInput.value = "";
    textOutput.value ="";
})