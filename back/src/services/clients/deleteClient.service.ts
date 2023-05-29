import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { AppError } from "../../error"

export const deleteClientService = async (idClient: number, loggedUser: number): Promise<void> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        id: idClient
    })

    if (client?.id !== loggedUser) {
        throw new AppError("Insufficient permission", 403);
    }

    await clientRepository.remove(client!)
}