import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { TReturnClient } from "../../interfaces/clients.interface"

export const listSpecificClientService = async (idClient: number): Promise<TReturnClient> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        id: idClient
    })

    return client!
}