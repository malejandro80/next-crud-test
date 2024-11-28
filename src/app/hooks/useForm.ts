/** @format */

import { useEffect, useState } from 'react'
import { EMPTY_ERROR, USER_SAVED, USER_UPDATED } from '../constants'
import { useStateContext } from '../context'
import { storeUser, updateUser } from '../services/user.service'

type FormData = {
  name: string
  job: string
}

export default function useForm() {
  const { userData, setIsFormOpen, setNotification, setUserData } =
    useStateContext()
  const initialState = {
    name: '',
    job: ''
  }

  const [formData, setFormData] = useState<FormData>(initialState)

  useEffect(() => {
    if (userData) {
      setFormData({ ...formData, name: userData.first_name })
      setIsFormOpen(true)
    }
  }, [userData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const reset = () => {
    setFormData(initialState)
    setUserData(null)
  }

  const handleUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, job } = formData

    if (!name.trim() || !job.trim()) {
      setNotification(EMPTY_ERROR)
      setTimeout(() => {
        setNotification(null)
      }, 2000)
      return
    }

    if (userData?.id) {
      await updateUser(userData.id, { name, job })
    } else {
      await storeUser({ name, job })
    }
    setNotification(userData ? USER_UPDATED : USER_SAVED)
    setTimeout(() => {
      setNotification(null)
    }, 2000)
    setIsFormOpen(false)
    reset()
  }

  return { handleUser, handleChange, setFormData, formData }
}
