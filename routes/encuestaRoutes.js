import express from "express"
import {agregarEncuesta, obtenerResultadosPromedios} from "../controllers/encuestaController.js"
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(checkAuth,agregarEncuesta).get(obtenerResultadosPromedios)


export default router;