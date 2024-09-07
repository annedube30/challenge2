let city = "Sydney";
let apikey = "db3364484d110at742a63o2f755d343b";
let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=db3364484d110at742a63o2f755d343b&units=metric`;

function displayTemperature(response) {
  console.log(response.data.temperature);
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let description = response.data.condition;
  h1.innerHTML = `The weather in ${city} it is ${temperature}°C`;
}
axios.get(apiurl).then(displayTemperature);
