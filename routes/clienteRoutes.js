import express  from "express";
import { registrar, perfil, autenticar } from "../controllers/clienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router= express.Router();

router.post('/',registrar);
router.post('/login', autenticar);

router.get('/perfil',checkAuth,perfil);

export default router;