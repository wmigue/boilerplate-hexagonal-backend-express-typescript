import { User } from "../../domain/user"
import { UserRepository } from "../../domain/user-repository"
import userDatabase from "./user-database.json"

//adaptador mysql
export class MySQLUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Using MySQL!")
    const rawUser = userDatabase.find((user) => user.id === id)
    return rawUser ? rawUser : null
  }

  async getByName(name: string): Promise<User | null> {
    const rawUser = userDatabase.find((user) => user.name === name)
    return rawUser ? rawUser : null
  }
}
