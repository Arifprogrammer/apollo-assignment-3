import { Model, Types } from 'mongoose'
import { TRoom } from './room.validation'

export interface RoomModel extends Model<TRoom> {
  isRoomExist(id: Types.ObjectId | string): Promise<TRoom | null>
}
