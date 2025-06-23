import type { User } from '../types/user.type'
import { create } from 'zustand'

interface UserState {
  user: User | null
  setUser: (u: User) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  clearUser: () => set({ user: null }),
}))
