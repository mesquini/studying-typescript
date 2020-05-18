import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Victor",
    email: "mesquini@live.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        email: "mesquini@live.com",
        name: "Victor Mesquini",
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Seja bem vindo",
      },
    });

    return res.send();
  },
};
