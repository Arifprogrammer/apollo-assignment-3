import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import AppError from '../errors/AppError'
import httpStatus from 'http-status'

export const authenticateToken = (...rest: string[]): RequestHandler => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] as string
    console.log(token)

    jwt.verify(token, config.JWT_SECRET as string, function (err, decoded) {
      if (err) throw new AppError(httpStatus.UNAUTHORIZED, err.message)
      req['email'] = decoded.email
    })
  }
}
