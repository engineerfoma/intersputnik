import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: string) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    return response.data
  }
)
