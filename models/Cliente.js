import mongoose from 'mongoose';
import generarId from '../helpers/generarId.js';
const clienteSchema = mongoose.Schema({
    tokenAdmin:{
        type: String,
        require: true,
        trim: true,
        unique: true
    }
    /*,
    token:{
        type: String,
      
      //  default: generarId()

    }*/
});

const Cliente = mongoose.model("Cliente", clienteSchema);
export default Cliente;