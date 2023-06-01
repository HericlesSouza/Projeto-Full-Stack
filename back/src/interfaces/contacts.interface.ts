import { z } from "zod"
import { DeepPartial } from "typeorm"
import { createContactSchema, returnAllContactSchema, returnContactSchema, updateContactSchema } from "../schemas/contact.schema"

export type TCreateContact = z.infer<typeof createContactSchema>

export type TUpdateContact = DeepPartial<typeof updateContactSchema>

export type TReturnContact = z.infer<typeof returnContactSchema>

export type TAllContact = z.infer<typeof returnAllContactSchema>
