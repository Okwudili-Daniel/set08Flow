import { Router } from "express";
import { createStaff, deleteStaff, viewStaff } from "../controller/staffController";

const router: Router = Router();

router.route("/create-staff/:userID").post(createStaff)
router.route("/view-staff/:userID").get(viewStaff)
router.route("/delete-staff/:userID/:staffID").delete(deleteStaff)

export default router;