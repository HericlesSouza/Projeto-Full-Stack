import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { TCreateClient, TReturnClient } from "../../interfaces/clients.interface";
import { returnClientSchema } from "../../schemas/clients.schema";

export const createClientService = async (clientData: TCreateClient): Promise<TReturnClient> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const newClient = clientRepository.create(clientData)

    await clientRepository.save(newClient);

    const clientReturn = returnClientSchema.parse(newClient)

    return clientReturn;
}