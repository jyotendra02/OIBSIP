window.onload = function() {
  const convertBtn = document.getElementById("convertBtn");
  const resultArea = document.getElementById("resultArea");

  convertBtn.addEventListener("click", function() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;

    if (temperatureInput === "" || isNaN(temperatureInput)) {
      resultArea.innerText = "Invalid input";
    } else {
      let convertedTemperature;
      let convertedUnit;

      if (unitSelect === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        convertedUnit = "Fahrenheit";
      } else if (unitSelect === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        convertedUnit = "Celsius";
      }

      resultArea.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    }
  });
};
