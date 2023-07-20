const loginBtn = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username || !password) {
    return;
  }

  const res = await fetch('/auth/login-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (res.status === 301) {
    window.location.href = res.url;
  } else {
    alert('Login failed');
  }
});
