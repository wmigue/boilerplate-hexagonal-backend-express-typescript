import { Request, Response } from "express"

import { FindUserByIdService } from "../../application/FindUserById.service"
import { FindUserByNameService } from "../../application/FindUserByName.service "
import { UserNotFound } from "../../domain/user-not-found"

export class UserGetController {
  constructor(
    private readonly findUserByIdService: FindUserByIdService,
    private readonly findUserByNameService: FindUserByNameService
  ) {}

  async findById(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await this.findUserByIdService.run(id)
      return res.status(200).send(user)
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).send()
      }

      return res.status(500).send()
    }
  }

  async findByName(req: Request, res: Response) {
    const name = req.query.name

    try {
      if (typeof name !== "string") {
        return res.status(404).send()
      } else {
        const user = await this.findUserByNameService.run(name)
        return res.status(200).send(user)
      }
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).send()
      }

      return res.status(500).send()
    }
  }
}
