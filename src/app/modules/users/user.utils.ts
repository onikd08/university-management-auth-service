import userService from './users.service'

export const generateUserId = async () => {
  const lastUserId =
    (await userService.findLastUserIdFromDB()) ||
    (0).toString().padStart(5, '0')
  // increment by 1
  const incrementedId = (parseInt(lastUserId) + 1).toString().padStart(5, '0')
  return incrementedId
}
