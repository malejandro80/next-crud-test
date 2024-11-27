/** @format */

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { User } from '../types/user'

type StateContextType = {
  userData: User | null
  setUserData: (user: User) => void
}

const StateContext = createContext<StateContextType | undefined>(undefined)

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null)

  return (
    <StateContext.Provider value={{ userData, setUserData }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error(
      'useStateContext must be initialized inside the state provider'
    )
  }
  return context
}
