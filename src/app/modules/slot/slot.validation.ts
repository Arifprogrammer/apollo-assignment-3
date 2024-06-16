import { z } from 'zod'

export const slotSchema = z.object({
  room: z
    .string({
      required_error: 'A room reference is required to book a slot',
      invalid_type_error: 'The room id must be a string value',
    })
    .trim(),
  date: z.coerce.date({
    required_error: 'The date of the booking is required',
  }),
  startTime: z
    .string({
      required_error: 'The start time of the slot is required',
      invalid_type_error: 'The start time must be a string value',
    })
    .trim(),
  endTime: z
    .string({
      required_error: 'The end time of the slot is required',
      invalid_type_error: 'The end time must be a string value',
    })
    .trim(),
  isBooked: z
    .boolean({
      required_error:
        'A boolean value is required to indicate if the slot is booked',
      invalid_type_error: 'The isBooked property must be a boolean value',
    })
    .default(false),
})
