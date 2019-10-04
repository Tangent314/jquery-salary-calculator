let totalSalary = 0;

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click','.deleteButton', deleteEmployee)
}

function addEmployee() {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();
    let employee = `<tr><td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${annualSalary}</td>
                        <td><button type="button" class="deleteButton">Delete</button></td></tr>`;
    $('tbody').append(employee);
    totalSalary += Number(annualSalary);
    let monthlyCost = totalSalary/12;
    $('#cash').text(monthlyCost.toFixed(2));
}