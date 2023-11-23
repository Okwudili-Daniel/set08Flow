import { connect } from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/authTaskDB"

export const dbConfig = () =>{
    try {
        connect(URL).then(() =>{
            console.log("Connected...🚀👍👍")
        })
    } catch (error) {
        console.log(error)
    }
}