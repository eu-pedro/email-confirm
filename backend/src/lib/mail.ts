import { User } from "@prisma/client";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export interface IMail {
  create(user: User): Promise<SMTPTransport.SentMessageInfo> 
}