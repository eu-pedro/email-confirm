import { User } from '@prisma/client';
import { EmailError } from '@/use-cases/errors/email-error';
import nodemailer from 'nodemailer';
import { IMail } from './mail';

export class NodeMailer implements IMail {

  async create(user: User) {
     const transponder = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    console.log(transponder, "aqui")

    const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA BOM DIA VITORIA",
    text: `http://localhost:3000/api/email?token=${user.validation_id}`,
  }

  const mails = await transponder.sendMail(mailOptions)
  return mails
}
}