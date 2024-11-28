/** @format */

export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type SupportInfo = {
  url: string
  text: string
}

export type PaginatedResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: SupportInfo
}

export type UserResponse = {
  data: User
}

export type saveUserResp = {
  name: string
  job: string
  id: string
  createdAt: string // Puede usarse `Date` si deseas manejarlo como un objeto de fecha.
}
