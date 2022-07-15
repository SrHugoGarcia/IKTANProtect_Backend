import Cliente from "../models/Cliente.js";
import generarJWT from "../helpers/generarJWT.js";
const registrar= async (req, res) =>{
    const {tokenAdmin} = req.body;
    // console.log(token);
     //Prevenir un cliente duplicado y no este corriendo postman
    const existeUsuario= await Cliente.findOne({tokenAdmin:tokenAdmin})
    if(existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }
   try{
        //Guardar un cliente
        const cliente = new Cliente(req.body);
        const clienteGuardado= await cliente.save();
        res.json(clienteGuardado);
   }catch(error){
        console.log(error);
   }
};

const autenticar= async(req,res) =>{
    const {tokenAdmin} = req.body;
    const usuario = await Cliente.findOne({tokenAdmin})
   // console.log(usuario)
    if(!usuario){
        const error = new Error("Usuario no existe");
        return res.status(400).json({msg: error.message});
    }else{
        //Autenticar 
    res.json({token: generarJWT(usuario.id)})
    }
    
   
   
    // console.log(req.body);
};


const perfil = (req, res) =>{
    const {cliente} = req;
    res.json(cliente);


};
export {
    registrar,
    perfil,
    autenticar
}