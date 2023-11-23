import { Request,Response } from "express";
// import projectModel from "../model/projectModel";
import projectModel from "../model/projectModel";
import { Types } from "mongoose";
import staffModel from "../model/staffModel";

export const createTask = async (req: Request, res: Response) =>{
    try {
        const {projectID} = req.params
        const {taskName, deadline, budget, email} = req.body;

        const staff = await staffModel.findOne({email})
        const project: any = await projectModel.findById(projectID);

        if (project?.budgetLeft < budget) {
            return res.status(200).json({
                msg: "Budget left is not equal to budget"
            })
        } else {
            if (project) {
                const task = await projectModel.create({taskName, deadline, budget,assignee: staff});
    
                project.task.push(new Types.ObjectId(task._id));
                project.save();
    
                await projectModel.findByIdAndUpdate(projectID,{budgetGivenOut: project.budgetGivenOut + budget, budgetLeft: project.budgetLeft - budget}, {new: true});
    
                return res.status(200).json({
                    message: "Staff created successfully",
                    data: task,
                })
            } else {
                return res.status(404).json({
                    message: "User not found",
                })
            }
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error creating project"
        })
    }
};

export const viewTask = async (req: Request, res: Response) =>{
    try {
        const {projectID} = req.params;

        const project = await projectModel.findById(projectID).populate({
            path: "task",
        });

        return res.status(200).json({
            message: `viewing task`,
            data: project,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error viewing task",
        })
    }
};

export const deleteTask = async (req: Request, res: Response) =>{
    try {
        const {taskID,projectID} = req.params;

        const project:any = await projectModel.findById(projectID)

        if (project) {
            const task = await projectModel.findByIdAndDelete(taskID);

            project.task.pull(new Types.ObjectId(task?._id))
            project.save();

            return res.status(200).json({
                message: `project deleted successfully`,
                data: task,
            })

        } else {
            return res.status(404).json({
                message: "Error"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: `Error in deleting project`
        })
    }
};