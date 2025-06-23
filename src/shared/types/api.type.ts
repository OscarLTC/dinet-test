export interface ApiResponse<T> {
  transaction_id: string
  timestamp: string
  data: T
}

export interface ApiErrorPayload {
  error_code: string
  error_detail: unknown[]
  error_message: string
}

export interface ApiErrorResponse {
  transaction_id: string
  timestamp: string
  error: ApiErrorPayload
}
