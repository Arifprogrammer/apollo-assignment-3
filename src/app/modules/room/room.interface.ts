import { Model } from 'mongoose'
import { TRoom } from './room.validation'

export interface RoomModel extends Model<TRoom> {
  isRoomExist(id: string): Promise<TRoom | null>
}
