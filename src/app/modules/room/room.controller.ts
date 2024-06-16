import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync.utils'
import { respond } from '../../utils/response.utils'
import { RoomService } from './room.service'

export const createRoom = catchAsync(async (req, res) => {
  const room = req.body
  const data = await RoomService.createRoom(room)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room added successfully',
  })
})

export const getSingleRoom = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = await RoomService.getSingleRoom(id)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room retrieved successfully',
  })
})

export const getAllRoom = catchAsync(async (req, res) => {
  const data = await RoomService.getAllRoom()

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rooms retrieved successfully',
  })
})

export const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = await RoomService.updateRoom(id, req.body)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room updated successfully',
  })
})

export const deleteRoom = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = await RoomService.deleteRoom(id)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room deleted successfully',
  })
})
