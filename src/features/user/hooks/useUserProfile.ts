import type { User } from '../types/user.type'
import { useQuery } from '@tanstack/react-query'
import { userService } from '../services/userService'
import { useUserStore } from '../store/userStore'

export const useUserProfile = () => {
  const { setUser } = useUserStore()

  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await userService.me()
      setUser(response.data)
      return response.data
    },
  })
}
