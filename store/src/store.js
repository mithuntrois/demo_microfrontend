import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector, useDispatch, Provider } from "react-redux";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


const dataSlice = createSlice({
    name: "data",
    initialState: { data: [] },
    reducers: {
        add: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        clear: (state) => {
            state.data = []
        }
    }
})

const { add } = dataSlice.actions;

const persistConfig = {
    key: 'root',
    storage,
}



const persistedReducer = persistReducer(persistConfig, dataSlice.reducer)

const store = configureStore({
    reducer: { data: persistedReducer },
});

const persistor = persistStore(store)

export const useStore = () => {
    const dispatch = useDispatch();
    return {
        data: useSelector(state => state.data.data),
        add: (action) => { dispatch(add(action)) }
    }
}

export const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
