import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export const mongoConnect = async () => {
  try {
    console.log('connecting to MongoDB...')
    await connect(process.env.MONGO_URL as string);
    console.log("MongoBG successfuly connected")
  }
  catch(err) {
    console.log('Error: ', err);
    
  }
}