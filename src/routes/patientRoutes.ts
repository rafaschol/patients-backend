import { Router } from "express";
import { PatientController } from "../controllers/PatientController";

const router = Router();

router.get("/", PatientController.getPatients);
router.post("/", PatientController.createPatient);

export default router;
