console.log('client is running');


function handlesSubmit(event) {
    event.preventDefault();
    //console.log('in handlessubmit');
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let emplID = document.getElementById('id-number').value
    let jobTitle = document.getElementById('job-title').value
    let annualSalary = document.getElementById('annual-salary').value

    //console.log(firstName, lastName, emplID, jobTitle, annualSalary);

}