function calculateWindChill(temp, windSpeed) 
{
    if (temp <= 50 && windSpeed > 3.0) 
    {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2);
    } 
    else 
    {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function() 
{
    const tempElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windspeed');
    const windChillElement = document.getElementById('windchill');

    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = windChill;
});