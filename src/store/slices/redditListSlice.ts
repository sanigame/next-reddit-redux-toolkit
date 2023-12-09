import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from '../store'

const REDDIT_API = 'https://www.reddit.com'
const SUBREDDIT = 'all'

export const fetchRedditList = createAsyncThunk(
  "redditList/fetchRedditList",
  async () => {
    const response = await axios.get(`${REDDIT_API}/r/${SUBREDDIT}/hot.json`)
    return response.data.data.children
})

const initialState = {
  list: [],
  isFetching: false,
  error: false,
};

const redditListSlice = createSlice({
  name: "redditList",
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchRedditList.pending, (state) => {
      state.isFetching = true
      state.error = false
    })
    .addCase(fetchRedditList.fulfilled, (state, action) => {
      state.isFetching = false
      state.list = action.payload
    })
    .addCase(fetchRedditList.rejected, (state) => {
      state.isFetching = false
      state.error = true
    })     
})

export const getRedditList = (state: RootState) => state.redditList.list
export const getRedditStatus = (state: RootState) => state.redditList.status
export const getRedditError = (state: RootState) => state.redditList.error

export default redditListSlice.reducer