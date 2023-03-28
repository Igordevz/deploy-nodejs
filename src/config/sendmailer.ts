import { Request, Response } from "express";

    import nodemailer from 'nodemailer'

    const user = process.env.ACESS_USER_GMAIL
    const password = process.env.ACESS_KEY_MAIL

    // configurar sendmailer para envio de emails em massa

    export const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {user: user, pass: password },
    })