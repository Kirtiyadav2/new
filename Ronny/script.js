const form = document.querySelector('form');
const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (username.value === 'admin' && password.value === 'password') {
    alert('Login successful!');
  } else {
    alert('Incorrect username or password.');
  }
});
