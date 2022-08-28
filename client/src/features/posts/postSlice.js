import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from './postService'


const initialState = {
    posts: [],
    isSuccess: false,
    isError: false,
    message: ''
}

export const posts = createAsyncThunk('getposts', async(_, thunkAPI) => {
    try {
        return await postService.getPosts()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const createPost = createAsyncThunk('createPosts', async(data, thunkAPI) => {
    try {
        return await postService.createPost(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSlice = createSlice({
    name: "teams",
    initialState,
    reducers: { 
        reset: (state) => {
            state.isSuccess = false
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(posts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(posts.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload),
                state.isSuccess = true
                state.message = "Post submitted"
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })

    }
})



export const create_team = createAsyncThunk('/auth/dashboard/add_team', async(data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await teamService.createTeam(data, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const { reset } = postSlice.actions
export default postSlice.reducer