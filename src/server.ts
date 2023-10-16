import express, { Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import { mongoConnect } from './database/mongo'
import apiRoutes from './routes/api'

dotenv.config()

mongoConnect();

const server = express();


server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({error: 'Endpoint not founded'})
})

server.listen(process.env.PORT)