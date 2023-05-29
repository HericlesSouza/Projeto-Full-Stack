import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../error";
import { TLogin } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken"
import "dotenv/config";

export const loginService = async (loginData: TLogin): Promise<string> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            email: loginData.email
        }
    })

    if (!client) {
        throw new AppError("Invalid credentials", 401);
    }

    const checkPassword = await compare(loginData.password, client.password)

    if (!checkPassword) {
        throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
        {
            id: client.id
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(client.id)
        }
    )

    return token
}