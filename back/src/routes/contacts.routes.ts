import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";
import { createContactSchema, updateContactSchema } from "../schemas/contact.schema";
import { createContactController, deleteContactController, listAllContactsController, listSpecificContactController, updateContactController } from "../controllers/contact.controller";

const contactRoutes: Router = Router()

contactRoutes.post("", ensureTokenIsValid, ensureDataIsValidMiddleware(createContactSchema), ensureContactExistsMiddleware, createContactController)
contactRoutes.get("", ensureTokenIsValid, listAllContactsController)
contactRoutes.get("/:id", ensureTokenIsValid, ensureContactExistsMiddleware, listSpecificContactController)
contactRoutes.patch("/:id", ensureTokenIsValid, ensureDataIsValidMiddleware(updateContactSchema), ensureContactExistsMiddleware, updateContactController)
contactRoutes.delete("/:id", ensureTokenIsValid, ensureContactExistsMiddleware, deleteContactController)

export default contactRoutes