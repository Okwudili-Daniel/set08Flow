import { Schema, Document, Types, model } from "mongoose";

interface iTask {
    taskName: string
    deadline: string
    assignee: {}
    budget: number
    project:{}
}

interface iTaskData extends iTask, Document{}

const taskModel = new Schema<iTaskData>({
    taskName: {
        type: String
    },
    deadline: {
        type: String
    },
    assignee: {
        type: {},
    },
    budget: {
        type: Number
    },
    project:{
        type: Types.ObjectId,
        ref: "projects"
    },
    
},{timestamps: true})

export default model<iTaskData>("tasks", taskModel);