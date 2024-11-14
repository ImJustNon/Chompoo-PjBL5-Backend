import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import QRCode from "qrcode";
import { validateJWTToken } from "../utils/validateJWTToken";
import { createJWTToken } from "../utils/createJWTToken";

export async function studentActivityQrController(req: Request, res: Response): Promise<void> {
    const { token }: Record<string, any> = req.cookies;

    const jwtData: JwtPayload = validateJWTToken(token) as JwtPayload;

    const uuid: string = jwtData.uuid;

    try {
        const uuidToJwt: string = createJWTToken({ uuid: uuid }, String(2 * 60 * 1000));
        const qrPngBuffer: Buffer = await QRCode.toBuffer(uuidToJwt);
        res.writeHead(201, { 
            'Content-Type': 'image/png' 
        });
        res.end(qrPngBuffer, 'binary');
    }
    catch(e){
        res.status(400).json({
            status: "FAIL",
            message: e
        });
    }
}