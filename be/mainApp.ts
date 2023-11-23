import { Application, Request, Response } from "express";
import user from "./router/userRouter"
import staff from "./router/staffRouter"
import project from "./router/projectRouter"
import task from "./router/taskRouter"

const mainApp = (app: Application) =>{
    try {
        app.use("/api/v1", user)
        app.use("/api/v1", staff)
        app.use("/api/v1", project)
        app.use("/api/v1", task)
        app.get("/", (req: Request, res: Response) =>{
            try {
                return res.status(200).json({
                    message: "welcome"
                })
            } catch (error) {
                return res.status(404).json({
                    message: "Erro"
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default mainApp;