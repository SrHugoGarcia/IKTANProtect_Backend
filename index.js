import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import clienteRoutes from "./routes/clienteRoutes.js";
import encuestaRoutes from "./routes/encuestaRoutes.js";
import cors from "cors";
const app = express();
//Escanea las variables de entorno
dotenv.config();
conectarDB();
const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del Request esta permitido
            callback(null,true)
        }else{
            callback(new Error("No permitido por CORS"))
        }
    }

}
app.use(cors(corsOptions));
//Le vamos a enviar a express datos de tipo json
app.use(express.json());
//Ruta de express
app.use("/clientes",clienteRoutes);
app.use("/encuestas",encuestaRoutes);

//variable del puerto
const PORT = process.env.PORT || 4000

//Prueba en consola
app.listen(PORT,()=>{
    console.log("Servidor ejecutando en el puerto ${PORT}");
});