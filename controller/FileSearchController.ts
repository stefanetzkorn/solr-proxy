import {Request, Response} from "express";


export const searchForFile = async (req: Request, res: Response) => {
    res.status(200).json({ success: "true"})
}