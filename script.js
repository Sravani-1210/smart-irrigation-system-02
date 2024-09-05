document.getElementById("irrigationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Input values
  const soilMoisture = parseFloat(document.getElementById("soilMoisture").value);
  const cropType = document.getElementById("cropType").value;
  const weatherCondition = document.getElementById("weatherCondition").value;
  const area = parseFloat(document.getElementById("area").value);

  let irrigationNeeded = false;
  let waterAmount = 0;

  // Logic for determining irrigation
  if (soilMoisture < 50) {  // If soil moisture is below 50%, irrigation is needed
    irrigationNeeded = true;

    // Water amount based on crop type and area
    switch (cropType) {
      case "wheat": waterAmount = 0.6; break;
      case "corn": waterAmount = 0.8; break;
      case "rice": waterAmount = 1.0; break;
      case "soybean": waterAmount = 0.7; break;
      case "cotton": waterAmount = 0.9; break;
      case "barley": waterAmount = 0.65; break;
      case "oats": waterAmount = 0.6; break;
      case "sunflower": waterAmount = 0.75; break;
      case "potato": waterAmount = 1.2; break;
      case "sugarcane": waterAmount = 1.5; break;
    }

    // Weather adjustment
    switch (weatherCondition) {
      case "rainy":
        waterAmount *= 0.5;
        break;
      case "mostlyCloudy":
        waterAmount *= 0.75;
        break;
      case "slightlySunny":
        waterAmount *= 1.0;
        break;
      case "sunny":
        waterAmount *= 1.25;
        break;
      case "stormy":
        waterAmount *= 0.25;
        break;
    }

    // Calculate total water amount based on area
    waterAmount = waterAmount * area;
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  if (irrigationNeeded) {
    resultDiv.innerHTML = <p>Irrigation is needed. Use <strong>${waterAmount.toFixed(2)} liters</strong> of water for the area.</p>;
  } else {
    resultDiv.innerHTML = "<p>No irrigation needed at this time.</p>";
  }
});
