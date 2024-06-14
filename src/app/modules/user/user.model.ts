import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    minlength: 4,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required.'],
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not supported as a role.',
    },
  },
})

export const User = model<IUser>('User', userSchema)
