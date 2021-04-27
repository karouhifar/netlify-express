// Showing the project details in module

$( document ).ready(function() {

var exampleModal = document.getElementById('projectModal');
var dataText = '';
var TitleArray = '';
var bodyText = '';

exampleModal.addEventListener('show.bs.modal', function (event) {

var button = event.relatedTarget;

var recipient = button.getAttribute('data-bs-whatever');
var bodyFormat = document.querySelector('.model-info-project');

TitleArray = [{React:"React", Angular:"Angular", JS:"JavaScript", Java:"Java"}];
bodyText = {ReactText:" This is a cool React",AngularText:" This is a cool Angular", JS:" This is a cool JavaScript", Java:"This is a cool Java"};

TitleArray.forEach ((TitleArrays) => {
    switch (recipient) {
        case "Nodejs App":
        dataText = `${TitleArrays.JS} project information`;
        bodyFormat.textContent = bodyText.JS;
        break;
        case "React App":
        dataText = `${TitleArrays.React} project information`;
        bodyFormat.textContent = bodyText.ReactText;
        break;
        case "Angular App":
        dataText = `${TitleArrays.Angular} project information`;
        bodyFormat.textContent = bodyText.AngularText;
        break;
        case "Java App":
        dataText = `${TitleArrays.Java} project information`;
        bodyFormat.textContent = bodyText.Java;
    }
})

var modalTitle = exampleModal.querySelector('.modal-title');
var modalBody = exampleModal.querySelector('.modal-body');

modalTitle.textContent =  dataText;
modalBody
})
});