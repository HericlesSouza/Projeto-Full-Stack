import { Request, Response } from "express";
import { TCreateClient, TUpdateClient } from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
import { updateClientService } from "../services/clients/updateClient.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const data: TCreateClient = req.body

    const newClient = await createClientService(data)

    return res.status(201).json(newClient);
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    const dataUser: TUpdateClient = req.body;
    const idClient = Number(req.params.id);
    console.log(res.locals.clientId)
    const loggedUser = Number(res.locals.clientId)

    const newUser = await updateClientService(dataUser, idClient, loggedUser);

    return res.status(200).json(newUser);
}