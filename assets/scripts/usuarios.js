// === usuarios.js ===

// Datos de ejemplo (simulando el db.json local)
const users = [
  { id: 1, username: "admin", email: "admin@safeware.com", role: "admin" },
  { id: 2, username: "operario", email: "operario@safeware.com", role: "operario" },
  { id: 3, username: "supervisor", email: "supervisor@safeware.com", role: "supervisor" },
];

// Renderizar tabla de usuarios
const userList = document.getElementById("user-list");
if (userList) {
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</td>
    `;
    userList.appendChild(row);
  });
}
