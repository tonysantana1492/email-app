export function formatDate(dateString) {
  var now = new Date();

  var date = new Date(dateString);

  var diferenciaMs = now - date;

  var diffHours = Math.floor(diferenciaMs / (1000 * 60 * 60));
  var diffMin = Math.floor((diferenciaMs / (1000 * 60)) % 60);

  var hour = date.getHours().toString().padStart(2, "0");
  var min = date.getMinutes().toString().padStart(2, "0");
  var hourFormated = hour + ":" + min;

  var result =
    hourFormated + " (" + diffHours + " hours and " + diffMin + " min ago)";

  return result;
}

export function formatShortDate(row) {
  const inputDate = row.date;
  const parts = inputDate.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const date = new Date(year, month - 1, day);

  const monthName = date.toLocaleString("en-US", { month: "short" });

  const formattedDay = ("0" + day).slice(-2);

  const formattedDate = monthName + " " + formattedDay;

  return formattedDate;
}
