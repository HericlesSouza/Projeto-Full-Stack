import { z } from "zod"

export const clientSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    createdAt: z.string()
})

export const createClientSchema = clientSchema.omit({
    id: true,
    createdAt: true
})

export const updateClientSchema = clientSchema.omit({
    id: true,
    createdAt: true
}).partial()

export const returnClientSchema = clientSchema.omit({
    password: true
})

export const returnAllClientSchema = returnClientSchema.array()