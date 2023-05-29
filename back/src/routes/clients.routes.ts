import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createClientSchema, updateClientSchema } from "../schemas/clients.schema";
import { ensureClientExistsMiddleware } from "../middlewares/ensureClientExists.middleware";
import { createClientController, deleteClientController, listAllClientsController, updateClientController } from "../controllers/client.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

const clientRoutes: Router = Router()

clientRoutes.post("", ensureDataIsValidMiddleware(createClientSchema), ensureClientExistsMiddleware, createClientController)
clientRoutes.patch("/:id", ensureTokenIsValid, ensureDataIsValidMiddleware(updateClientSchema), updateClientController)
clientRoutes.get("", ensureTokenIsValid, listAllClientsController)
clientRoutes.delete("/:id", ensureTokenIsValid, ensureClientExistsMiddleware, deleteClientController)

export default clientRoutes