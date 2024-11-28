/** @format */

import { useEffect, useState } from 'react'
import { User } from '../types/user'
import { getUser, getUsers } from '../services/user.service'

export const useUser = () => {
  const [users, setUsers] = useState<User[] | null>(null)
  const [selectedUser, setSelectedUser] = useState<User[] | null>(null)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const resp = await getUsers()
    setUsers(resp.data)
  }

  const deleteUser = async () => {
    alert('delete')
  }

  const selectUser = async (id: number) => {
    const resp = await getUser(id)
    setSelectedUser(resp.data)
  }
  return { users, deleteUser, selectUser, selectedUser }
}
