
let api_key = '619abb6406695f658dab47cea98d97be';
let ciudad = document.getElementById('ciudadEntrada');
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let difKelvin = 273.15




window.addEventListener('keypress',(e)=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    const busqueda = document.getElementById('botonBusqueda')

   if (e.key === 'Enter' ) {
    if(ciudad ){
        fechtDatdosClima(ciudad)
        }
       }
     })

function fechtDatdosClima(ciudad){

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
   .then(data => data.json())
   .then(data  => mostrarDatosClima(data))

}


 function mostrarDatosClima(data){
    console.log(data)

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `Ubicacion: ${ciudadNombre}`;
    divDatosClima.appendChild(ciudadTitulo);

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperartura es: ${Math.floor(temperatura-difKelvin)}°C`;
    divDatosClima.appendChild(temperaturaInfo);

    const iconoInfo = document.createElement('img');
    iconoInfo.src = ` https://openweathermap.org/img/wn/${icono}@2x.png`;
    divDatosClima.appendChild(iconoInfo)


    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;
    divDatosClima.appendChild(descripcionInfo);
    
    
   
 }



