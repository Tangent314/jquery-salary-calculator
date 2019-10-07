let totalSalary = 0; // lines 1-3 are global variables
let monthlyCost;
let annualSalary;


$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click', '.deleteButton', deleteEmployee)
}

function addEmployee() { // adds employee info
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    annualSalary = $('#annualSalary').val();
    let employee = `<tr><td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td class="salary">${annualSalary}</td>
                        <td><button type="button" class="deleteButton">Delete</button></td></tr>`;
    $('tbody').append(employee);
    
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

function deleteEmployee() { // deletes employee data and recalculates total monthly cost 
    totalSalary - Number($(this).closest('td').prev().html());
    monthlyCost -= Number($(this).closest('td').prev().html())/12;
    totalSalary -= Number($(this).closest('td').prev().html());
    $("body").data("test", {first:  '$' + monthlyCost.toFixed(2)});
    $("#cash").text($("body").data("test").first);
    $(this).closest('tr').remove();
}

