import { Router } from "express";
import { renderIndex, renderAbout, renderDirectorio, renderElectro } from "../controllers/index.controller";

const router = Router();

router.get("/", renderIndex);
router.get("/directorio", renderDirectorio);
router.get("/about", renderAbout);
router.get("/lavadora", renderElectro);


export default router;
