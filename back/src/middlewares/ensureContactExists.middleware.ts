import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { TCreateContact } from "../interfaces/contacts.interface";
import { Contact } from "../entities/contacts.entity";

export const ensureContactExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const idContact = Number(req.params.id);
    const contact: TCreateContact = req.body;

    const contactRepository = AppDataSource.getRepository(Contact);

    if (idContact) {
        const checkContactExist = await contactRepository.findOne({
            where: {
                id: idContact
            }
        });

        if (!checkContactExist) {
            throw new AppError("Contact not found", 404);
        }
    }

    if (contact.email) {
        const checkContactExist = await contactRepository.findOne({
            where: {
                email: contact.email,
            }
        });

        if (checkContactExist) {
            throw new AppError("Email already exists", 409);
        }
    }

    return next();
};