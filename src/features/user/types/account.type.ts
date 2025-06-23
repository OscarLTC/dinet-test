import type { ApiResponse } from '@/shared/types/api.type'

export interface Account {
  id: number
  code: string
  description: string
  active: boolean
}

export type AccountsResponse = ApiResponse<Account[]>
