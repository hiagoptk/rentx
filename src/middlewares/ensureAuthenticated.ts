import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppErrors } from "../errors/AppErrors";
import { UserRepository } from "../modules/accounts/entities/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppErrors("Missing token.", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "7c25939a1bad5b641c15b57cd1ac9d07"
        ) as IPayload;

        const userRepository = new UserRepository();
        const verifiedUser = await userRepository.findById(user_id);

        if (!verifiedUser) {
            throw new AppErrors("User does not exist!", 401);
        }

        next();
    } catch {
        throw new AppErrors("Invalid Token!", 401);
    }
}
