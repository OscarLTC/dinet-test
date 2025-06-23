import type { ApiResponse } from '@/shared/types/api.type'

export interface MeData {
  names: string
  last_names: string
  email: string
  phone: string
  document_number: string
  user_type_description: string
  role_description: string
  supplier_description: string | null
}

export type MeResponse = ApiResponse<MeData>

export type User = MeData
