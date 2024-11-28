/** @format */

import { del, get, post, put } from './http.service'
import { PaginatedResponse, saveUserResp } from '../types/user'

export const getUsers = async (): Promise<PaginatedResponse> => {
  return await get('users?page=1')
}

export const getUser = async (id: number): Promise<PaginatedResponse> => {
  return await get(`users/${id}`)
}

export const storeUser = async (body: {
  name: string
  job: string
}): Promise<saveUserResp> => {
  return await post(`users`, body)
}

export const updateUser = async (
  id: number,
  body: {
    name: string
    job: string
  }
): Promise<saveUserResp> => {
  return await put(`users/${id}`, body)
}

export const deleteUser = async (id: number): Promise<saveUserResp> => {
  return await del(`users/${id}`)
}
