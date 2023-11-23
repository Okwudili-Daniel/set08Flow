import { Router } from "express";
import { createTask, deleteTask, viewTask } from "../controller/taskCOntrolller";

const router: Router = Router();

router.route("/create-task/:userID").post(createTask)
router.route("/view-task/:userID").get(viewTask)
router.route("/delete-task/:userID/:projectID").delete(deleteTask)

export default router;