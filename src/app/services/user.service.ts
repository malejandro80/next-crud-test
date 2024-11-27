
import { get } from './http.service'
import { PaginatedResponse } from '../types/user'

export const getUsers = async () : Promise<PaginatedResponse>=> {
  return await get('users?page=1')
}

export const getUser = async (id:number) : Promise<PaginatedResponse>=> {
  return await get(`users/${id}`)
}