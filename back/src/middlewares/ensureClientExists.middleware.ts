import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TCreateClient } from "../interfaces/clients.interface";
import { Client } from "../entities/clients.entity";
import { AppError } from "../error";


export const ensureClientExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const idClient = Number(req.params.id);
    const client: TCreateClient = req.body;

    const clientRepository = AppDataSource.getRepository(Client);

    if (idClient) {
        const checkClientExist = await clientRepository.findOne({
            where: {
                id: idClient
            }
        });

        if (!checkClientExist) {
            throw new AppError("Client not found", 404);
        }
    }

    if (client.email) {
        const checkClientExist = await clientRepository.findOne({
            where: {
                email: client.email,
            }
        });

        if (checkClientExist) {
            throw new AppError("Email already exists", 409);
        }
    }

    return next();
};