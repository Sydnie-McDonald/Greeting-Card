//get the input form control
const nameInput = document.getElementById('name-input');
//get the span for the band name
const bandName = document.getElementById('band-name');
//add event listener for input changing
nameInput.addEventListener('input', () => {
    console.log('input changed', nameInput.value);
    //when it changes, update the value for span
});

