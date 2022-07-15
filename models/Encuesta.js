import mongoose from "mongoose";

const encuestaSchema = mongoose.Schema({
    respuesta01:{
        type: String,
        trim: true,
        required: true

    },
    respuesta02:{
        type: String,
        trim: true,
        required: true

    },
    respuesta03:{
        type: String,
        trim: true,
        required: true

    },
    respuesta04:{
        type: String,
        trim: true,
        required: true

    },
    respuesta05:{
        type: String,
        trim: true,
    },
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    },

},{
    timestamps: true,
})
const Encuesta = mongoose.model("Encuesta", encuestaSchema);

export default Encuesta;