import { Router } from "express";
import { renderElectro } from "../controllers/directorio.controller";


const router = Router();

router.get("/lavadora", renderElectro);




