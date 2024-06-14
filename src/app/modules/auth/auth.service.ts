import { IUser } from '../user/user.interface'
import { User } from '../user/user.model'

class Service {
  async createUser(user: IUser) {
    return await User.create(user)
  }
}

export const AuthService = new Service()
