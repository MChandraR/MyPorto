import { ObjectId } from "mongodb";

export interface UserDb {
  _id?: ObjectId;
  username: string;
  password: string;
  createdAt?: Date;
}
