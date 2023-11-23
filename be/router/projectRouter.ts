import { Router } from "express";
import { createProject, deleteProject, viewProject } from "../controller/projectContoller";

const router: Router = Router();

router.route("/create-project/:userID").post(createProject)
router.route("/view-project/:userID").get(viewProject)
router.route("/delete-project/:userID/:projectID").delete(deleteProject)

export default router;