let totalOfSalaries = 0


// When submit button is pressed, this function is called. 
function handlesSubmit(event) {

// ADD: add a function to check if all the inputs are full

    event.preventDefault();
    //console.log('in handlessubmit');

    // Getting the values of the inputs and assigning them to variables
    let firstName = document.getElementById('first-name')
    let lastName = document.getElementById('last-name')
    let emplID = document.getElementById('id-number')
    let jobTitle = document.getElementById('job-title')
    let annualSalary = document.getElementById('annual-salary')

    //console.log(firstName, lastName, emplID, jobTitle, annualSalary);
    
    
    // Creating elements to append to the table
    let tdFirstName = document.createElement('td')
    let tdLastName = document.createElement('td')
    let tdEmplID = document.createElement('td')
    let tdJobTitle = document.createElement('td')
    let tdAnnualSalary = document.createElement('td')

    let tr = document.createElement('tr')
    let tbody = document.getElementById('table-body')


    // Assigning the values of inputs to the innerText of the created elements
    // Refactored as an object?
    tdFirstName.innerText = firstName.value
    tdLastName.innerText = lastName.value
    tdEmplID.innerText = emplID.value
    tdJobTitle.innerText = jobTitle.value
    tdAnnualSalary.innerText = annualSalary.value

    //console.log(tdFirstName, tdLastName, tdEmplID, tdJobTitle, tdAnnualSalary);

    tr.append(tdFirstName, tdLastName, tdEmplID, tdJobTitle, tdAnnualSalary)
    tbody.append(tr)

    addToTotalOfSalaries(annualSalary.value)

    firstName.value = ''
    lastName.value = ''
    emplID.value = ''
    jobTitle.value = ''
    annualSalary.value = ''
}

// A function that will take an amount and add it to the total amount of salaries in the table
function addToTotalOfSalaries(amount) {
    let spanTotalIncome = document.getElementById('total-of-salaries')
    if (Number(amount)) {
        totalOfSalaries += Number(amount)
    }

    // Adding the totalOfSalaries to the DOM
    spanTotalIncome.innerText = `$${totalOfSalaries}`

    // toggling a class to apply a class to the span that has the number
    if (totalOfSalaries > 20000) {
        spanTotalIncome.classList.toggle('over-budget')
    }
}
