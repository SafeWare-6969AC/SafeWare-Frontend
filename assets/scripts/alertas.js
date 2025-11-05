const alerts = [
  { id: 1, type: "vibración", level: "critica", message: "Vibración alta en Zona A", time: "2025-11-04 10:30" },
  { id: 2, type: "temperatura", level: "alta", message: "Temperatura 38°C en Almacén B", time: "2025-11-04 09:15" },
  { id: 3, type: "presión", level: "media", message: "Presión ligeramente elevada en tanque C", time: "2025-11-04 08:00" },
  { id: 4, type: "ruido", level: "baja", message: "Ruido fuera de horario en taller", time: "2025-11-04 07:20" },
];

// Renderizar alertas
const alertContainer = document.getElementById("alerts-container");
if (alertContainer) {
  alerts.forEach((alert) => {
    const div = document.createElement("div");
    div.classList.add("alert-card", alert.level);
    div.innerHTML = `
      <h3>${alert.type.toUpperCase()}</h3>
      <p>${alert.message}</p>
      <p><strong>Nivel:</strong> ${alert.level}</p>
      <small>${alert.time}</small>
    `;
    alertContainer.appendChild(div);
  });
}