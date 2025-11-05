// ../scripts/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  const userNameSpan = document.getElementById('user-name');
  const userRoleStrong = document.getElementById('user-role');
  const alertCountEl = document.getElementById('alert-count');
  const userCountEl = document.getElementById('user-count');
  const alertsContainer = document.getElementById('alerts-container');
  const logoutLink = document.getElementById('logout');

  // Recuperar sesión
  const sessionRaw = localStorage.getItem('safeware_session');
  if (!sessionRaw) {
    // Si no hay sesión, volver al login
    window.location.href = 'login.html';
    return;
  }

  const session = JSON.parse(sessionRaw);

  // Mostrar datos del usuario
  if (userNameSpan) userNameSpan.textContent = session.name || session.username;
  if (userRoleStrong) userRoleStrong.textContent = session.role || 'Usuario';

  // Ejemplo: poblar métricas estáticas o desde localStorage
  // En producción deberías consultar una API.
  const dummyAlertCount = localStorage.getItem('safeware_alert_count') || 3;
  const dummyUserCount = localStorage.getItem('safeware_user_count') || 12;

  if (alertCountEl) alertCountEl.textContent = dummyAlertCount;
  if (userCountEl) userCountEl.textContent = dummyUserCount;

  // Ejemplo de últimas alertas (puedes reemplazar con datos reales)
  const dummyAlerts = [
    { id: 1, text: 'Sensor A: Temperatura elevada', time: '2025-11-04 18:12' },
    { id: 2, text: 'Sensor B: Caída de señal', time: '2025-11-04 17:40' },
    { id: 3, text: 'Sensor C: Movimiento detectado', time: '2025-11-04 16:22' }
  ];

  if (alertsContainer) {
    alertsContainer.innerHTML = '';
    dummyAlerts.forEach(a => {
      const div = document.createElement('div');
      div.className = 'alert-item';
      div.innerHTML = `<strong>#${a.id}</strong> ${a.text} <small class="time">(${a.time})</small>`;
      alertsContainer.appendChild(div);
    });
  }

  // Logout: limpiar sesión y volver al login
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('safeware_session');
      // opcional: limpiar otras keys si fuera necesario
      window.location.href = 'login.html';
    });
  }
});
