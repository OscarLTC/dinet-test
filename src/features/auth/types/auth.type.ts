export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  transaction_id: string
  timestamp: string
  uri: string
  data: {
    token_type: string
    token: string
    expiration: string
  }
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface User {
  username: string
  role_id?: number
  email?: string
  nombre?: string
}

export interface ApiError {
  message: string
  code?: string
  details?: unknown
}
