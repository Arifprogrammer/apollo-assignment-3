import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync.utils'
import { respond } from '../../utils/response.utils'
import { SlotService } from './slot.service'

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
