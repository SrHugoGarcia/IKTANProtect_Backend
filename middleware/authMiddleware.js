import jwt from "jsonwebtoken";
import Cliente from "../models/Cliente.js";
//Para rutas protegidas
const checkAuth = async (req, res, next) =>{
    let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try{
        token = req.headers.authorization.split(' ')[1]
        //console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.cliente = await Cliente.findById(decoded.id);
        return next();
    }catch(error){
        const e = new Error("Token no valido");
return res.status(403).json({msg:e.message})
    }
}
if(!token){
    const error = new Error("Token no valido o inexistente");
res.status(403).json({msg:error.message})
}

next();
};
export default checkAuth;