import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { productReducer } from "./product/product.slice";
import rootSaga from "./root.saga";
import { useDispatch} from 'react-redux';
import { userReducer } from "./user/user.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
