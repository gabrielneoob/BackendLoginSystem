import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    if(req.headers.authorization) {


      //Pegar o authorization e dividir pelo espaço " "
      // Bearer esadsa
      const [ authType, token ] = req.headers.authorization.split(' ');
      
      if(authType === 'Bearer') {
        try{
          const decode = JWT.verify(
            // token enviado pelo headers Bearer
            token,

            // chave do token armazenada no .env
            process.env.JWT_TOKEN as string
          );

          res.json({decode})
          success = true;       
          console.log('DECODED', decode);
        }
        catch(err) {
          
        }
      }  
    }

    if(success) {
      next();
    } else {
      res.status(403);
      res.json({error: 'Not Authorized'})
    }
  } 
}