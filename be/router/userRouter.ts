import { Router } from "express";
import { create, deleteUser, signinUser, viewOneUser, viewUser } from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(create)
router.route("/login").post(signinUser)
router.route("/view-user").get(viewUser)
router.route("/view-one-user/:userID").get(viewOneUser)
router.route("/delete-user/:userID").delete(deleteUser)

export default router;