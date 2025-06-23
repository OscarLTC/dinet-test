import type { AccountsResponse } from '../types/account.type'
import type { MeResponse } from '../types/user.type'
import { apiClient } from '@/shared/api/apiClient'

const BASE_AUTH_URL = '/entities/api/v1/users'

export const userService = {
  me: () => apiClient.get<MeResponse>(`${BASE_AUTH_URL}/me`),
  fetchUserAccounts: () => apiClient.get<AccountsResponse>(`${BASE_AUTH_URL}/me/accounts`),
  switchAccount: (accountId: string) =>
    apiClient.post('/entities/api/v1/users/me/switch-account', {
      account_id: accountId.toString(),
    }),
}
