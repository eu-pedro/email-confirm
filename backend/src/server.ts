import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import nodemailer from 'nodemailer'
import { app } from './app'
import { appRoutes } from './http/routes'

app.register(cors)

// app.post('/user', async (request, reply) => {
//   const { email } = request.body

//   const user = await prisma.user.create({
//     data: {
//       email
//     }
//   })
//   const transponder = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   })

//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: user.email,
//     subject: "Gabriel, curioso com os rumores sobre uma casa abandonada na colina onde uma luz estranha surgia todas as noites, decidiu investigar. Ao entrar, percorreu os corredores escuros e sentiu um arrepio quando viu uma sombra que não era sua refletida na parede. De repente, uma luz intensa apareceu atrás dele, e uma voz sussurrou: 'Eu estava esperando por você.' Gabriel se virou, mas antes que pudesse ver quem estava lá, a luz se apagou, e o autor comeu o cu de quem tá lendo.",
//     text: `http://localhost:3000/api/email?token=${user.validation_id}`,
//   }

//   transponder.sendMail(mailOptions, (error, info) => {
//     if(error) {
//       return reply.status(500).send()
//     }


//     return reply.status(200).send()
//   })
// })

// app.post("/confirm", async (request, reply) => {
//   const { token } = request.body

//   const user = await prisma.user.findUnique({
//     where: {
//       validation_id: token
//     }
//   })
//   if(!user) {
//     return reply.status(404).send()
//   }

//   await prisma.user.update({
//     data: {
//       checked: new Date(),
//       validation_id: ''
//     }, 
//     where: {
//       id: user.id
//     }
//   })

//   return reply.status(200).send()
// })

app.listen({
  port: 3333,
}).then(() => console.log("HTTP server is running!"))
.catch((error) => {
  throw new Error(error)
})