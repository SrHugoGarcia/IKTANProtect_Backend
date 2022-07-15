const promedioServicio = (encuestas) =>{
    const respuesta01 = encuestas.map(function(respuesta){
        return parseInt(respuesta.respuesta01);
    })
    const totalRespuesta01 = respuesta01.reduce((a, b) => a + b, 0);
        //Promedio
    const promedio01 = totalRespuesta01/respuesta01.length
    return promedio01;
}
const promedioAhorro = (encuestas) =>{
    const respuesta02 = encuestas.map(function(respuesta){
        return parseInt(respuesta.respuesta02);
    })
    const totalRespuesta02 = respuesta02.reduce((a, b) => a + b, 0);
        //Promedio
    const promedio02 = totalRespuesta02/respuesta02.length
    return promedio02;
}
const promedioEficiencia = (encuestas) =>{
    const respuesta03 = encuestas.map(function(respuesta){
        return parseInt(respuesta.respuesta03);
    })
    const totalRespuesta03 = respuesta03.reduce((a, b) => a + b, 0);
        //Promedio
    const promedio03 = totalRespuesta03/respuesta03.length
    return promedio03;
}
const promedioActualizacion = (encuestas) =>{
    const respuesta04 = encuestas.map(function(respuesta){
        return parseInt(respuesta.respuesta04);
    })
    const totalRespuesta04 = respuesta04.reduce((a, b) => a + b, 0);
        //Promedio
    const promedio04 = totalRespuesta04/respuesta04.length
    return promedio04;
}

export {promedioServicio, promedioAhorro, promedioEficiencia, promedioActualizacion};
