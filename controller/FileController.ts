import {Request, Response} from "express";
import * as crypto from "crypto";

type FileMeta = {
    fileSize: number,
    fileExtension: string,
    fileCreation: Date,
}

export const searchForFile = async (req: Request, res: Response) => {
    res.status(200).json({ success: "true"})
}

export const updateFile = async (req: Request, res: Response) => {
    const {filePath, fileName, fileMeta, fileContent} = req.body as {
        filePath: string,
        fileName: string,
        fileMeta: FileMeta,
        fileContent: string
    };
    const fullPath: string = filePath + fileName + fileMeta.fileExtension;

    // we are using the file path/name as
    const fileId: string = crypto.createHash("md5").update(fullPath).digest("hex");

    res.status(200).json({id: fileId});

}