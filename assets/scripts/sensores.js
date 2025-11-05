const sensores = [
  { id: 1, nombre: "Sensor A1", tipo: "Vibración", valor: "12.4 Hz", estado: "Normal" },
  { id: 2, nombre: "Sensor T3", tipo: "Temperatura", valor: "38°C", estado: "Alerta" },
  { id: 3, nombre: "Sensor P2", tipo: "Presión", valor: "1.8 bar", estado: "Normal" },
  { id: 4, nombre: "Sensor R5", tipo: "Ruido", valor: "65 dB", estado: "Normal" },
  { id: 5, nombre: "Sensor T4", tipo: "Temperatura", valor: "42°C", estado: "Crítica" },
];

// Renderizar tarjetas de sensores
const grid = document.getElementById("sensor-grid");
if (grid) {
  sensores.forEach((sensor) => {
    const card = document.createElement("div");
    card.classList.add("sensor-card");
    if (sensor.estado.toLowerCase() !== "normal") {
      card.classList.add("alerta");
    }

    card.innerHTML = `
      <h3>${sensor.nombre}</h3>
      <p><strong>Tipo:</strong> ${sensor.tipo}</p>
      <p><strong>Valor:</strong> ${sensor.valor}</p>
      <p class="estado"><strong>Estado:</strong> ${sensor.estado}</p>
    `;

    grid.appendChild(card);
  });
}