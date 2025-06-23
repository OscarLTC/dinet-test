import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '../services/userService'

export const useSwitchAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (accountId: string) => userService.switchAccount(accountId),
    onMutate: () => {
      const prev = queryClient.getQueryData(['user', 'accounts'])
      return { prev }
    },
    onError: (_err, _variables, context: any) => {
      if (context?.prev) {
        queryClient.setQueryData(['user', 'accounts'], context.prev)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'accounts'] })
    },
  })
}
