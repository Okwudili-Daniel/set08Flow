import { Request,Response } from "express";
import staffModel from "../model/staffModel";
import userModel from "../model/userModel";
import { Types } from "mongoose";

export const createStaff = async (req: Request, res: Response) =>{
    try {
        const {userID} = req.params
        const {staffName, email, password, avatar} = req.body;

        const user = await userModel.findById(userID);

        if (user) {
            const staff = await staffModel.create({staffName, email, password, avatar: staffName.charAt(0)});

            user.staff.push(new Types.ObjectId(staff._id));
            user.save();

            return res.status(200).json({
                message: "Staff created successfully",
                data: staff,
            })
        } else {
            return res.status(404).json({
                message: "User not found",
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error creating staff"
        })
    }
};

export const viewStaff = async (req: Request, res: Response) =>{
    try {
        const {userID} = req.params;

        const staff = await userModel.findById(userID).populate({
            path: "staff",
        })

        return res.status(200).json({
            message: `viewing staff`,
            data: staff,
        })
    } catch (error) {
        return res.status(404).json({
            message: `Error viewing staff`
        })
    }
};

export const deleteStaff = async (req: Request, res: Response) =>{
    try {
        const {userID,staffID} = req.params;

        const user:any = await userModel.findById(userID)

        if (user) {
            const staff = await staffModel.findByIdAndDelete(staffID);

            user.staff.pull(new Types.ObjectId(staff?._id))
            user.save();

            return res.status(200).json({
                message: `staff deleted successfully`,
                data: staff,
            })

        } else {
            return res.status(404).json({
                message: "Error"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: `Error in deleting staff`
        })
    }
};