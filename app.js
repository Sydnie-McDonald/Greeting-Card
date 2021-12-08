//$('textarea').autoResize();

//Get the input name, identify the value, display the current value of the input
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
console.log(nameInput, nameDisplay);
const descriptionDisplay = document.getElementById('description-display');
const descriptionInput = document.getElementById('description-input');
console.log(descriptionDisplay, descriptionInput);
const imageChoice = document.getElementById('image-choice');
const image = document.getElementById('image');
console.log(imageChoice, image);


nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

descriptionInput.addEventListener('input', () => {
    descriptionDisplay.textContent = descriptionInput.value;
});

imageChoice.addEventListener('change', () => {
    image.src = imageChoice.value;
});