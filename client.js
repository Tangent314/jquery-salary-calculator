let totalSalary = 0;



$(document).ready(onReady);

function onReady() { // performs addEmployee and deleteEmployee functions when submit and delete is clicked respectively
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click', '.deleteButton', deleteEmployee)
}

function addEmployee() { // reads the input values employee information
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    let employee = `<tr><td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td class="salary">${annualSalary}</td>
                        <td><button type="button" class="deleteButton">Delete</button></td></tr>`;
    $('tbody').append(employee);

    salaries.push(annualSalary);

    monthlyCalculator(annualSalary);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

function monthlyCalculator(cash) { // calculates monthly cost
    totalSalary += Number(cash);
    monthlyCost = totalSalary / 12;
    if (monthlyCost > 20000) {
        $('#cash').text(`$${monthlyCost.toFixed(2)}`).css('color', 'red');
    } else {
        $('#cash').text(`$${monthlyCost.toFixed(2)}`);
    }
}

function deleteEmployee() {
    $(this).closest('tr').remove();
}


