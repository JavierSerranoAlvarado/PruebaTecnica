const $tabla = document.querySelector('#tabla');

const api = async () => {
    const respuesta = await fetch("https://api.datos.gob.mx/v1/calidadAire");
    const datos = await respuesta.json();

    for(let i = 1; i < datos.results.length; i++){
        const resultado = datos.results[i];
        if(resultado.stations[0].measurements[0] != undefined){
            const measurements = resultado.stations[0].measurements[0]
            const row = `<tr> 
            <td> ${resultado.stations[0].source_id} </td> 
            <td> ${resultado.stations[0].name} </td>
            <td> ${resultado.stations[0].location.lat} </td>  
            <td> ${resultado.stations[0].location.lon} </td>
            <td> ${measurements.pollutant} </td>
            <td> ${measurements.time} </td>   
            </tr>`;
            $tabla.innerHTML += row;            
        }
        
        
    }

}

api();