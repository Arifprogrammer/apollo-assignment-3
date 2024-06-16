import { Model, Types } from 'mongoose'

export interface IUser {
  id?: Types.ObjectId
  name: string
  email: string
  password: string
  phone: string
  address: string
  role: 'user' | 'admin'
}

export interface UserModel extends Model<IUser> {
  isUserExist(email: string): Promise<IUser | null>
  userWithoutPassword(id: Types.ObjectId): Promise<IUser | null>
}
