import Encuesta from "../models/Encuesta.js";
import { promedioServicio, promedioActualizacion, promedioEficiencia, promedioAhorro } from "../helpers/promedio.js";
const agregarEncuesta = async (req,res) => {
    const encuesta = new Encuesta(req.body);
    //console.log(encuesta);
    encuesta.cliente = req.cliente._id;
    try{
       // console.log(encuesta)
       const encuestaAlmacenado = await encuesta.save();
       res.json(encuestaAlmacenado);
    }catch(error){
        console.log(error)
    }
};
const obtenerResultadosPromedios =async (req,res) => {
    var empleados= [];
    const encuestas = await Encuesta.find();
    const servicioTotal=promedioServicio(encuestas);
    const ahorroTotal = promedioAhorro(encuestas);
    const eficienciaTotal = promedioEficiencia(encuestas);
    const actualizacionTotal = promedioActualizacion(encuestas);
    empleados.push(servicioTotal.toFixed(2));
    empleados.push(ahorroTotal.toFixed(2));
    empleados.push(eficienciaTotal.toFixed(2));
    empleados.push(actualizacionTotal.toFixed(2));
    res.json(empleados);

};


export {agregarEncuesta,obtenerResultadosPromedios};