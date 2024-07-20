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
  hourFormated +
    " (" +
    diffHours +
    " hours and " +
    diffMin +
    " min ago)";

  return result;
}
