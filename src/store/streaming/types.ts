export interface UserState {
  id: string
  name: string
  loading: boolean
  error: string | null
}

export const SET_USER = 'SET_USER'
export const FETCH_USER = 'FETCH_USER'
