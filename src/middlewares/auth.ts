import { Response, Request, NextFunction } from "express"
import User from "../models/User";

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
      // fazer verificação auth
      let success = false;
      if(req.headers.authorization) {
        const hash = req.headers.authorization.slice(5);
        console.log(hash);
        
        //descriptografar
        const decoded = Buffer.from(hash, 'base64').toString();
        console.log(decoded);
        // separar email da senha e verificar no DB
        const data = decoded.split(':');

        if(data.length === 2) {
          const hasUser = await User.findOne({
            email: data[0],
            password: data[1]
          });
          if(hasUser) {
            success = true
          }
        }
      }
      if(success) {
        next()
      } else {
        res.status(403) // Not Autorized
        res.json({ error: "Not Authorized "})
      }
  } 
}