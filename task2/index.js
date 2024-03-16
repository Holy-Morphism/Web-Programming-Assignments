$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    let city = $("input").val();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=153118330ddffa43c169753b172ac215`;
    $.get(url, function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
