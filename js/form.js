// get input field value 
const getInputFieldValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

// 
const saveName = () => {
    const name = getInputFieldValueById('name-field');
    localStorage.setItem('Name', name);
}

// 
const deleteName = () => {
    localStorage.removeItem('Name');
}

// 
const saveEmail = () => {
    const email = getInputFieldValueById('email-field');
    localStorage.setItem('Email', email);
}

// 
const deleteEmail = () => {
    localStorage.removeItem('Email');
}
// 

const saveMessage = () => {
    const message = getInputFieldValueById('message-field');
    localStorage.setItem('Message', message);
}

// 
const deleteMessage = () => {
    localStorage.removeItem('Message');
}


// save all data inside the local storage
const saveAll = () => {
    let name = getInputFieldValueById('name-field');
    let email = getInputFieldValueById('email-field');
    let message = getInputFieldValueById('message-field');

    const myObj = { Name: name, Email: email, Message: message };
    const myObjStringify = JSON.stringify(myObj);

    localStorage.setItem('My Object', myObjStringify)
}

// clear all from the local storage
const clearAll = () => {
    localStorage.clear()
}