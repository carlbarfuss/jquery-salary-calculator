$(document).ready(onReady);

function onReady(){
    appendDom();
    $('#submitButton').on('click', addEmployee);
}

function appendDom(){
/*ended up not really needing to use this at page 
load much this time, although the page could have been built using this
I tried just putting the main structure of the page into the HTML, styling with 
CSS, and then using jquery append functions to add things that were needed
after page creation.
*/
}

let newEmployeeFname = $('#fnameInput').val();
let newEmployeeLname = $('#lnameInput').val();
let newEmployeeID = $('#IDInput').val();
let newEmployeeTitle = $('#titleInput').val();
let newEmployeeSalary = $('#salaryInput').val();

//Add employee data from form to employee table 
function addEmployee(){
    //check to make sure all fields are full, alert user if info missing
    if( $('#fnameInput').val() == '' || $('#lnameInput').val() == '' || $('#IDInput').val() == '' 
        || $('#titleInput').val() == '' || $('#salaryInput').val() == ''){
        alert('please fill out all fields before submitting');
        }
    else{
        //assign field values to variables
        newEmployeeFname = $('#fnameInput').val();
        newEmployeeLname = $('#lnameInput').val();
        newEmployeeID = $('#IDInput').val();
        newEmployeeTitle = $('#titleInput').val();
        newEmployeeSalary = $('#salaryInput').val();
        
        //append new variables to DOM/table
        $('#employeeTable').append(`<tr id="${newEmployeeID}"><td>${newEmployeeFname}</td>
        <td>${newEmployeeLname}</td><td>${newEmployeeID}</td><td>${newEmployeeTitle}</td>
        <td>${newEmployeeSalary}</td><td><button class="removeButton">Remove Row</button></td></tr>`);
        $('.removeButton').on('click', removeRow);
        updateBudget(); //updates DOM with budget data
        //reset form fields
        $('#fnameInput').val('');
        $('#lnameInput').val('');
        $('#IDInput').val('');
        $('#titleInput').val('');
        $('#salaryInput').val('');
    }//end else
}//end addEmployee

//update DOM with totals of all listed employees' salaries
function updateBudget(){
    let salaryTotal = 0;
    for(let i=0; i<employeeTable.rows.length; i++){
        salaryTotal += Number(employeeTable.rows[i].cells[4].innerHTML);
    }
$('#employeeTotalSalaries').empty();
$('#employeeTotalSalaries').append(`Salary Total is: $${salaryTotal}`);
}//end updateBudget

function removeRow(){
    $('.removeButton').on('click', removeRow);
    console.log('in removeRow');
    $(this).closest('tr').remove();
    updateBudget();
}
