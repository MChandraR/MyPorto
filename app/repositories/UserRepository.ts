import { ObjectId } from "mongodb";
import { getDb } from "../lib/dbService";
import { UserDb } from "../models/db/UserDb";
import { User } from "../models/domain/User";

export class UserRepository {
  private static async getCollection() {
    const db = await getDb();
    return db.collection<UserDb>("users");
  }

  // Map Database Model to clean Domain Model
  public static toDomain(userDb: UserDb): User {
    return {
      id: userDb._id ? userDb._id.toString() : "",
      username: userDb.username,
      createdAt: userDb.createdAt,
    };
  }

  // ----------------------------------------------------
  // BASIC CRUD OPERATIONS
  // ----------------------------------------------------

  public static async findByUsername(username: string): Promise<UserDb | null> {
    const col = await this.getCollection();
    return col.findOne({ username });
  }

  public static async findById(id: string): Promise<UserDb | null> {
    if (!ObjectId.isValid(id)) return null;
    const col = await this.getCollection();
    return col.findOne({ _id: new ObjectId(id) });
  }

  public static async create(user: Omit<UserDb, "_id">): Promise<string> {
    const col = await this.getCollection();
    const result = await col.insertOne({
      ...user,
      createdAt: user.createdAt || new Date(),
    } as UserDb);
    return result.insertedId.toString();
  }

  public static async update(id: string, user: Partial<Omit<UserDb, "_id">>): Promise<boolean> {
    if (!ObjectId.isValid(id)) return false;
    const col = await this.getCollection();
    const result = await col.updateOne(
      { _id: new ObjectId(id) },
      { $set: user }
    );
    return result.modifiedCount > 0;
  }

  public static async delete(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) return false;
    const col = await this.getCollection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}
