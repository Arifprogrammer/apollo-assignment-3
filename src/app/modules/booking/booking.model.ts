import { Schema, Types, model } from 'mongoose'
import { TBooking } from './booking.validation'

const bookingSchema = new Schema<TBooking>({
  room: {
    type: Types.ObjectId,
    required: [true, 'Room Id is required'],
    trim: true,
  },
  slots: {
    type: [Types.ObjectId],
    required: [true, 'At least one slot Id is required'],
    minlength: [1, 'At least one slot Id is required'],
  },
  user: {
    type: Types.ObjectId,
    required: [true, 'User Id is required'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'Booking date is required'],
    trim: true,
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
  },
  isConfirmed: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    required: [true, 'Booking status is required'],
    default: 'unconfirmed',
  },
  isDeleted: {
    type: Boolean,
    required: [true, 'Deleted status is required'],
    default: false,
  },
})

const BookingModel = model<TBooking>('Booking', bookingSchema)

export default BookingModel
