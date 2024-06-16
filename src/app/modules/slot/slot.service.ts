import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Room } from '../room/room.model'
import { TSlot } from './slot.validation'
import { Slot } from './slot.model'

class Service {
  async createSlot(slot: TSlot) {
    const room = await Room.isRoomExist(slot.room)
    if (!room) throw new AppError(httpStatus.BAD_REQUEST, 'Room does not exist')
    const minutesPerHour = 60
    const startHour = Number(slot.startTime.split(':')[0]) //* extracting hour only "10:00" -> 10
    const endHour = Number(slot.endTime.split(':')[0]) //* extracting hour only "12:00" -> 12
    const slotsCount =
      (endHour * minutesPerHour - startHour * minutesPerHour) / minutesPerHour //* extracting slots count by minutes 300 / 60 -> 5

    const slots: TSlot[] = []
    let currentStartTime = startHour - 1

    for (let index = 0; index < slotsCount; index++) {
      currentStartTime += 1
      const currentEndTime = currentStartTime + 1

      slots.push({
        ...slot,
        startTime: `${currentStartTime.toString()}:00`,
        endTime: `${currentEndTime.toString()}:00`,
      })
    }
    return await Slot.create(slots)
  }
}

export const SlotService = new Service()
