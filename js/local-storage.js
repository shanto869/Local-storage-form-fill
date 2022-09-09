const name = 'Shanto';
const age = '24';

const addInfo = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age)
}

const getInfo = () => {
    const name = localStorage.getItem('Name');
    const age = localStorage.getItem('Age');
    if (name && age) {
        alert(`My name is ${name} and my age is ${age}`);
    }
    else {
        alert(`Nothing Store any name and key`)
    }
}

const deleteInfo = () => {
    localStorage.removeItem('Name');
    localStorage.removeItem('Age');
}


const setObject = () => {
    let firstName = 'Shanto';
    let lastName = 'Biswas';

    const myObj = {};
    myObj.firstName = firstName;
    myObj.lastName = lastName;

    const myObjStringify = JSON.stringify(myObj);
    localStorage.setItem('Object', myObjStringify)
}