import { Request,Response } from "express";
import projectModel from "../model/projectModel";
import userModel from "../model/userModel";
import { Types } from "mongoose";

export const createProject = async (req: Request, res: Response) =>{
    try {
        const {userID} = req.params
        const {projectName, deadline, budget} = req.body;

        const user = await userModel.findById(userID);

        if (user) {
            const project = await projectModel.create({projectName, deadline, budget,budgetGivenOut: 0, budgetLeft: budget});

            user.project.push(new Types.ObjectId(project._id));
            user.save();

            return res.status(200).json({
                message: "Staff created successfully",
                data: project,
            })
        } else {
            return res.status(404).json({
                message: "User not found",
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error creating project"
        })
    }
};

export const viewProject = async (req: Request, res: Response) =>{
    try {
        const {userID} = req.params;

        const project = await userModel.findById(userID).populate({
            path: "project",
        });

        return res.status(200).json({
            message: `viewing project`,
            data: project,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error viewing project",
        })
    }
};

export const deleteProject = async (req: Request, res: Response) =>{
    try {
        const {userID,projectID} = req.params;

        const user:any = await userModel.findById(userID)

        if (user) {
            const project = await projectModel.findByIdAndDelete(projectID);

            user.project.pull(new Types.ObjectId(project?._id))
            user.save();

            return res.status(200).json({
                message: `project deleted successfully`,
                data: project,
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