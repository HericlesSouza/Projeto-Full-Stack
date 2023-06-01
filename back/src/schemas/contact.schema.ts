import { z } from "zod"
import { returnClientSchema } from "./clients.schema"

export const contactSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    createdAt: z.string(),
    client: z.lazy(() => returnClientSchema)
})

export const createContactSchema = contactSchema.omit({
    id: true,
    createdAt: true,
    client: true
})

export const updateContactSchema = contactSchema.omit({
    id: true,
    createdAt: true,
    client: true
}).partial()

export const returnContactSchema = contactSchema

export const returnAllContactSchema = returnContactSchema.omit({
    client: true
}).array()