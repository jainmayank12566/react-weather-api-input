export async function Sayhello(data){
    const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=36b1b541a7a546a78ac175734231105&q=${data}&aqi=yes`);
    return promise.json();
}