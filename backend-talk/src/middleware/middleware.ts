import jwt from "jsonwebtoken";
import type { AuthenticatedRequest } from "../express.js";
import type { NextFunction, Response } from "express";

const JWT_AUTH: any = process.env.JWT_AUTH;

export const adminMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    // Expecting "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Invalid authorization format" });
    }

    try {
        const decoded = jwt.verify(token, JWT_AUTH) as { userId: string };

        req.userId = decoded.userId;
        next();
        console.log("Authorization Header:", req.headers["authorization"]);
        console.log("Decoded JWT:", decoded);
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};
