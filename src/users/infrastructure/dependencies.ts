import { config } from "../../config"
import { FindUserByIdService } from "../application/FindUserById.service"
import { FindUserByNameService } from "../application/FindUserByName.service "
import { UserRepository } from "../domain/user-repository"
import { UserGetController } from "./http/user-get-controller"
import { MongoUserRepository } from "./user-repository/mongo-user-repository"
import { MySQLUserRepository } from "./user-repository/mysql-user-repository"

const getUserRepository = (): UserRepository => {
  switch (config.database) {
    case "mongo":
      console.log("Using Mongodb!!!!")
      return new MongoUserRepository()
    case "mySQL":
      console.log("Using mySQL!")
      return new MySQLUserRepository()
    default:
      throw new Error("Invalid Database type")
  }
}

const findUserByIdService = new FindUserByIdService(getUserRepository())
const findUserByNameService = new FindUserByNameService(getUserRepository())
export const userGetController = new UserGetController(
  findUserByIdService,
  findUserByNameService
)
