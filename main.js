const id = id => document.getElementById(id);
const classes = classes => document.getElementsByClassName(classes);

const username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),

    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

form.addEventListener('submit', event => {
    event.preventDefault();

    engine(username, 0, "can't be blank");
    engine(email, 1, 'email blank');
    engine(password, 2, 'pass can be blank');
})

const engine = (id, serial, message) => {
    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red'

        // icons
        failureIcon[serial].style.opacity = '1';
        failureIcon[serial].style.opacity = '0';

    } else {
        errorMsg[serial].innerHTML = '';
        id.style.border = '2px solid green';

        // icons
        failureIcon[serial].style.opacity = '0';
        failureIcon[serial].style.opacity = '1';
    }
}
