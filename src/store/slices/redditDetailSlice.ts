import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const REDDIT_API = 'https://www.reddit.com'

export const fetchRedditDetail = createAsyncThunk(
  'redditDetail/fetchRedditDetail',
  async (userData: { name: string }) => {
    const { name } = userData
    const response = await axios.get(`${REDDIT_API}/by_id/${name}.json`)
    return response.data.data.children[0].data
  },
)

const initialState = {
  detail: {
    title: '',
    subreddit: '',
  },
  isFetching: false,
  error: false,
};

const redditDetailSlice = createSlice({
  name: 'redditDetail',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchRedditDetail.pending, (state) => {
      state.isFetching = true
      state.error = false
    })
    .addCase(fetchRedditDetail.fulfilled, (state, action) => {
      state.isFetching = false
      state.detail.title = action.payload.title
      state.detail.subreddit = action.payload.subreddit
    })
    .addCase(fetchRedditDetail.rejected, (state) => {
      state.isFetching = false
      state.error = true
    })     
})

export default redditDetailSlice.reducer