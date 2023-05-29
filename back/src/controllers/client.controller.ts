import { Request, Response } from "express";
import { TCreateClient, TUpdateClient } from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
import { updateClientService } from "../services/clients/updateClient.service";
import { listAllClientsService } from "../services/clients/listAllClients.service";
import { deleteClientService } from "../services/clients/deleteClient.service";
import { listSpecificClientService } from "../services/clients/listSpecificClient.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const data: TCreateClient = req.body

    const newClient = await createClientService(data)

    return res.status(201).json(newClient);
}

export const listAllClientsController = async (req: Request, res: Response): Promise<Response> => {
    const clients = await listAllClientsService()

    return res.status(201).json(clients)
}

export const listSpecificClientController = async (req: Request, res: Response): Promise<Response> => {
    const idClient: number = Number(req.params.id)

    const client = await listSpecificClientService(idClient)

    return res.status(201).json(client)
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    const dataUser: TUpdateClient = req.body;
    const idClient = Number(req.params.id);
    const loggedUser = Number(res.locals.clientId)

    const newUser = await updateClientService(dataUser, idClient, loggedUser);

    return res.status(200).json(newUser);
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const idClient = Number(req.params.id);
    const loggedUser = Number(res.locals.clientId)

    await deleteClientService(idClient, loggedUser);

    return res.status(204).send();
}