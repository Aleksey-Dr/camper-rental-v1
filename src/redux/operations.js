import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://662b8906de35f91de15899a8.mockapi.io/api/v1/';

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/campers');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addCamper = createAsyncThunk(
    'campers/addCampers',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/campers', { name, number });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteCamper = createAsyncThunk(
    'campers/deleteCamper',
    async (camperId, thunkAPI) => {
        try {
            const response = await axios.delete(`/campers/${camperId._id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
