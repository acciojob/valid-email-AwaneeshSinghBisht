function validEmail(str) {

    const regex = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;

    return regex.test(str);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));