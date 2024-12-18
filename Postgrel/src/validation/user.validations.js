const { z } = require("zod");

const create = z.object({
    fullName: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3).max(15),
})

const userValidation = {
    create,
}

module.exports = userValidation;