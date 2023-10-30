export const WeatherData = async(city)=>{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=537ecdf9ee4c402281374422231308&q=${city}&days=6&aqi=yes&alerts=yes`);
    const data = await response.json()
    return data;
    
}