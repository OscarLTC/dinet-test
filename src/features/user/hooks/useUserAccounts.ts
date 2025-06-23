import type { Account } from '../types/account.type'
import { useQuery } from '@tanstack/react-query'
import { userService } from '../services/userService'
import { useUserAccountStore } from '../store/userAccountStore'

export const useUserAccounts = () => {
  const { setAccounts } = useUserAccountStore()

  return useQuery<Account[]>({
    queryKey: ['user', 'accounts'],
    queryFn: async () => {
      const response = await userService.fetchUserAccounts()
      setAccounts(response.data)
      return response.data
    },
  })
}
