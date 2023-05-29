import { Request, Response } from "express";
import { TAllClient } from "../../interfaces/clients.interface"
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { returnAllClientSchema } from "../../schemas/clients.schema";

export const listAllClientsService = async (): Promise<TAllClient> => {
    const clientRepository =  AppDataSource.getRepository(Client)

    const clients = await clientRepository.find()

    return returnAllClientSchema.parse(clients)
}