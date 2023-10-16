import { Schema, Model, model, connection, models } from "mongoose";
import { UserType } from "../types/user.types";

export const schema = new Schema<UserType>({
  email: { type: String, required: true},
  password: { type: String, required: true},
});

const modelName = 'User';
console.log(connection.models)

export default (connection && connection.models[modelName]) ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema);