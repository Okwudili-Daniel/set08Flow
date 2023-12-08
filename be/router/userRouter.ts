import { Router } from "express";
import { createBroMo, createFreMo, createPreMo, deleteUser, signinUser, viewOneUser, viewUser } from "../controller/userController";

const router: Router = Router();

router.route("/create-FreMo").post(createFreMo)
router.route("/create-BroMo").post(createBroMo)
router.route("/create-PreMo").post(createPreMo)
router.route("/login").post(signinUser)
router.route("/view-user").get(viewUser)
router.route("/view-one-user/:userID").get(viewOneUser)
router.route("/delete-user/:userID").delete(deleteUser)

export default router;