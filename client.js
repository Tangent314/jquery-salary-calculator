

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click','.deleteButton', deleteEmployee)
}