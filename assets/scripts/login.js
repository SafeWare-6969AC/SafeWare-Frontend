// ../scripts/login.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  // Usuarios "hardcodeados" para demo. En producción, validar en servidor.
  const USERS = [
    { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrador' },
    // puedes añadir más usuarios aquí si quieres
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessage.textContent = '';

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      errorMessage.textContent = 'Ingresa usuario y contraseña.';
      return;
    }

    const user = USERS.find(u => u.username === username && u.password === password);

    if (!user) {
      errorMessage.textContent = 'Usuario o contraseña incorrectos.';
      return;
    }

    // Guardar sesión en localStorage
    const session = {
      username: user.username,
      name: user.name || user.username,
      role: user.role || 'user',
      loggedAt: new Date().toISOString()
    };
    localStorage.setItem('safeware_session', JSON.stringify(session));

    // Redirigir al dashboard (ajusta la ruta si tu estructura es diferente)
    // Si login.html y dashb.html están en la misma carpeta: 'dashb.html'
    // Si dashb.html está en otra ruta, coloca la ruta correcta.
    window.location.href = 'dashb.html';
  });
});
