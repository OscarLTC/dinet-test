import type { Account } from '../types/account.type'
import { create } from 'zustand'

interface UserAccountState {
  accounts: Account[]
  activeAccount: Account | null
  setAccounts: (accounts: Account[]) => void
  setActiveAccount: (account: Account | null) => void
}

export const useUserAccountStore = create<UserAccountState>((set) => ({
  accounts: [],
  activeAccount: null,
  setAccounts: (accounts) =>
    set((state) => ({
      accounts,
      activeAccount: state.activeAccount ?? accounts[0] ?? null,
    })),
  setActiveAccount: (account) => set({ activeAccount: account }),
}))
