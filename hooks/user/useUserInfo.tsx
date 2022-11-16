import { useQuery } from '@tanstack/react-query';
import { useUserData } from '../../context/userContext';
import { User } from '../../model/inteface';

const useUserinfo = () => {
  const userService = useUserData();
  const { data: userList, isLoading } = useQuery<User[] | undefined>(
    ['users'],
    async () => await userService?.userList(),
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    }
  );

  return {
    userList,
    isLoading,
  };
};
export default useUserinfo;
