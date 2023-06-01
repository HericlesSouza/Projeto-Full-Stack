import { Request, Response } from "express";
import { TCreateContact, TUpdateContact } from "../interfaces/contacts.interface";
import { createContactService } from "../services/contacts/createContact.service";
import { listAllContactsService } from "../services/contacts/listAllContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listSpecificContactService } from "../services/contacts/listSpecificContact.service";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const contactData: TCreateContact = req.body
    const loggedClient: number = Number(res.locals.clientId)

    const newContact = await createContactService(contactData, loggedClient)

    return res.status(201).json(newContact)
}

export const listAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const loggedClient: number = Number(res.locals.clientId)

    const contacts = await listAllContactsService(loggedClient)

    return res.status(201).json(contacts)
}

export const listSpecificContactController = async (req: Request, res: Response): Promise<Response> => {
    const idContact: number = Number(req.params.id)
    const loggedClient: number = Number(res.locals.clientId)

    const contact = await listSpecificContactService(idContact, loggedClient)

    return res.status(201).json(contact)
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const dataUser: TUpdateContact = req.body;
    const idClient = Number(req.params.id);
    const loggedUser = Number(res.locals.clientId)

    const newUser = await updateContactService(dataUser, idClient, loggedUser);

    return res.status(200).json(newUser);
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const idClient = Number(req.params.id);
    const loggedUser = Number(res.locals.clientId)

    await deleteContactService(idClient, loggedUser);

    return res.status(204).send();
}