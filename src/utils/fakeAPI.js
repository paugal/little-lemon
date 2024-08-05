const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (dateString) => {
  const date = new Date(dateString); // Convertir la cadena de fecha a un objeto Date
  let result = [];
  let random = seededRandom(date.getDate());

  const today = new Date();
  const isToday = date.toDateString() === today.toDateString(); // Verificar si la fecha es hoy
  const currentHour = today.getHours();
  const currentMinutes = today.getMinutes();

  for (let i = 17; i <= 23; i++) {
    // Si es hoy, verificar que la hora no sea anterior a la hora actual
    if (
      !isToday ||
      i > currentHour ||
      (i === currentHour && currentMinutes < 30)
    ) {
      if (random() < 0.5) result.push(i + ":00");
    }
    if (
      !isToday ||
      i > currentHour ||
      (i === currentHour && currentMinutes < 0)
    ) {
      if (random() < 0.5) result.push(i + ":30");
    }
  }

  return result;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
