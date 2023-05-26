
import { AppDataSource } from "../../data-source";
import { TReturnClient, TUpdateClient } from "../../interfaces/clients.interface";
import { returnClientSchema } from "../../schemas/clients.schema";
import { AppError } from "../../error";
import { Client } from "../../entities/clients.entity";

export const updateClientService = async (clientData: TUpdateClient, idClient: number, loggedUser: number): Promise<TReturnClient> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        id: idClient
    })

    if (client?.id !== loggedUser) {
        throw new AppError("Insufficient permission", 403);
    }

    const newClient = clientRepository.create({
        ...client,
        ...clientData
    })

    await clientRepository.save(newClient)

    return returnClientSchema.parse(newClient)
}