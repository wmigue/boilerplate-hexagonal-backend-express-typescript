import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import userDatabase from "./user-database.json";

export class ElasticUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Using Elastic!");

    const rawUser = userDatabase.find((user) => user.id === id);

    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }
}
