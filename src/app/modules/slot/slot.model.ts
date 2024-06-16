import { Schema, model } from 'mongoose'

const slotSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    required: [true, 'A room reference is required to book a slot'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'The date of the booking is required'],
  },
  startTime: {
    type: String,
    required: [true, 'The start time of the slot is required'],
    trim: true,
  },
  endTime: {
    type: String,
    required: [true, 'The end time of the slot is required'],
    trim: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
})

export const Slot = model('Slot', slotSchema)
