import { UserService } from './user.service';

export const generateUserId = async () => {
  const firstUserId = (0).toString().padStart(5, '0');
  const lastUserId = (await UserService.findLastUserId()) || firstUserId;
  // increment by 1
  const incrementedId = (parseInt(lastUserId) + 1).toString().padStart(5, '0');
  return incrementedId;
};
