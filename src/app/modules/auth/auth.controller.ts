import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync.utils'
import { respond } from '../../utils/response.utils'
import { AuthService } from './auth.service'

export const createUser = catchAsync(async (req, res) => {
  const user = req.body
  const data = await AuthService.createUser(user)

  respond(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
  })
})
