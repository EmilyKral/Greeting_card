const handlers = require("./handlers")

function init(){
    let form = document.querySelector('#my-form')
    form.addEventListener('submit', handlers.handleFormSubmit);

    let button = document.querySelector('#back');
    button.addEventListener('click', e=>{
        location.reload()
    });
}

init();
console.log('Hello')