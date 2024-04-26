import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers, addCamper, deleteCamper } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        campers: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.campers = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(addCamper.pending, handlePending)
            .addCase(addCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.campers.push(action.payload);
            })
            .addCase(addCamper.rejected, handleRejected)
            .addCase(deleteCamper.pending, handlePending)
            .addCase(deleteCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.campers = state.campers.filter(camper =>
                    camper.id !== action.payload.id);
            })
            .addCase(deleteCamper.rejected, handleRejected);
    },
});

export default campersSlice.reducer;