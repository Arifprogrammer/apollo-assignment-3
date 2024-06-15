import { Schema, model } from 'mongoose'
import { TRoom } from './room.validation'

const roomSchema = new Schema<TRoom>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: 1,
  },
  roomNo: {
    type: Number,
    required: [true, 'Room number is required'],
    min: [0, 'Room no must be greater than 0'],
  },
  floorNo: {
    type: Number,
    required: [true, 'Floor number is required'],
    min: [0, 'Floor no must be greater than 0'],
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: [0, 'Room capacity must be greater than 0'],
  },
  pricePerSlot: {
    type: Number,
    required: [true, 'Price per slot is required'],
    min: [0, 'Price per slot must be greater than 0'],
  },
  amenities: {
    type: [String],
    default: [],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

export const Room = model<TRoom>('Room', roomSchema)
