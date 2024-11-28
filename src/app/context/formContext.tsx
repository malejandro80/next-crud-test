/** @format */

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { User } from '../types/user'
import { ERROR_CONTEXT } from '../constants'

type StateContextType = {
  userData: User | null
  setUserData: (user: User | null) => void
  isFormOpen: boolean
  setIsFormOpen: (status: boolean) => void
  notification: string | null
  setNotification: (message: string | null) => void
}

const StateContext = createContext<StateContextType | undefined>(undefined)

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [notification, setNotification] = useState<string | null>(null)

  return (
    <StateContext.Provider
      value={{
        userData,
        setUserData,
        isFormOpen,
        setIsFormOpen,
        notification,
        setNotification
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error(ERROR_CONTEXT)
  }
  return context
}
