let apiKey = "f93a85a759fcf50b6224365ba1ef10e6";

document.getElementById("searchBtn").addEventListener("click", async function () {

    let city = document.getElementById("city").value;

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        // Temperature
        document.getElementById("temp").innerHTML =
            `🌡️ Temperature: ${data.main.temp} °C`;

        // Humidity
        document.getElementById("humidity").innerHTML =
            `💧 Humidity: ${data.main.humidity}%`;

        // Condition
        document.getElementById("condition").innerHTML =
            `⛅ Condition: ${data.weather[0].main}`;

    } catch (error) {

        alert("City not found!");

    }

});