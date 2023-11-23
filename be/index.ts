import express, {Application} from "express"
import cors from "cors"
import { dbConfig } from "./utils/dbConfig";
import mainApp from "./mainApp";

const app: Application = express()
const port: number = 4455;

app.use(express.json())
app.use(cors())

mainApp(app)


const server = app.listen(port,() =>{
    console.clear()
    dbConfig();
    console.log("first server listening on port")
})

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err)
    process.exit(1)
})

process.on("unhandledRejection", (reason) =>{
    console.log("unhandledRejection", reason)
    server.close(() =>{
        process.exit(1);
    })
})