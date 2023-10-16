import { Request, Response } from "express";
import JWT from 'jsonwebtoken'
import User from '../models/User';
import dotenv from 'dotenv'

dotenv.config()

// CRUD

// CREATE
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const currentUser = await User.findOne({ email });
  if(email && password) {
    if(!currentUser) {
      const newUser = await User.create({
        email,
        password
      });

      const token = JWT.sign(
        { id: newUser.id, email: newUser.email },
        process.env.JWT_TOKEN as string,
        { expiresIn: '1hr' }
      )
      
      res.status(202);
      res.json({id: newUser._id, token});
      return;
    }  else {
      res.status(404)
      res.json({ error: 'E-mail já existe.'});
      return;
    }
  }

  res.json({ error: 'E-mail e/ou senha não enviados'})
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if(email && password) {
    const user = await User.findOne({email, password});

    if(user) {
      // gerar token JWT
      const token = JWT.sign(
        // primeiro parâmetro é um objeto com o que vamos precisar armazenar dentro do token
        { id: user.id, email },

        // segundo parâmetro é a chave privada do token, geralmente colocamos ela no .env
        process.env.JWT_TOKEN as string,

        // terceiro parâmetro seria uma data de expiração do token ou outras propiedades
        { expiresIn: '1hr' }
      );

      res.json({ status: true, token });
      return;
    }
  }

  res.json({ status: false})
}

export const list = async (req: Request, res: Response) => {
  const users = await User.find();
  const list = users.map((user) => user.email);
  console.log(list);
  // res.json({ list })

}


// READ

export const getUsers = async ( req: Request, res: Response ) => {
  const users = await User.find();

  res.status(202);
  res.json(users);
}