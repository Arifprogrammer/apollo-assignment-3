import { Response } from 'express'

export function respond(
  res: Response,
  input: {
    data?: unknown
    success: boolean
    statusCode: number
    message?: string
    [key: string]: unknown
  },
) {
  const { data, statusCode, message, success } = input

  return res.status(statusCode).json({
    statusCode,
    success,
    message,
    data,
  })
}
