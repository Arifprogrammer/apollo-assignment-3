import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync.utils'
import { respond } from '../../utils/response.utils'
import { SlotService } from './slot.service'
import { ObjectId } from 'mongoose'
import AppError from '../../errors/AppError'

export const createSlot = catchAsync(async (req, res) => {
  const slot = req.body
  const data = await SlotService.createSlot(slot)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
  })
})

export const getAllSlots = catchAsync(async (req, res) => {
  const { date, roomId: room } = req.query
  const data = await SlotService.getAllSlots({ date, room } as {
    date: unknown
    room: unknown
  } as {
    date: string
    room: ObjectId
  })

  if (!data.length)
    throw new AppError(httpStatus.NOT_FOUND, 'No slot available at this moment')

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Available slots retrieved successfully',
  })
})
