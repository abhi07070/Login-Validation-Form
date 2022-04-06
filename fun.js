function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Davi' && password == 'Kumar') {
        alert('Login successfuly!');
    } else {
        alert('Login failed');
    }
}