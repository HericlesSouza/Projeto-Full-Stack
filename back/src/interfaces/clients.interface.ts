import { z } from "zod"
import { DeepPartial } from "typeorm"
import { createClientSchema, returnAllClientSchema, returnClientSchema, updateClientSchema } from "../schemas/clients.schema"

export type TCreateClient = z.infer<typeof createClientSchema>

export type TUpdateClient = DeepPartial<typeof updateClientSchema>

export type TReturnClient = z.infer<typeof returnClientSchema>

export type TAllClient = z.infer<typeof returnAllClientSchema>
