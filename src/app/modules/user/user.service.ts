import config from '../../../config/index'
import ApiError from '../../../errors/ApiError'
import { generateUserId } from './user.utils'
import { IUser } from './user.interface'
import { User } from './user.model'

const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

const createUser = async (user: IUser): Promise<IUser> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!!!')
  }
  return createdUser
}

export const UserService = {
  createUser,
  findLastUserId,
}
