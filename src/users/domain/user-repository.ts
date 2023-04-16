import { User } from "./user"

//puerto
export interface UserRepository {
  getById(id: string): Promise<User | null>;
  getByName(name: string): Promise<User | null>;
}
