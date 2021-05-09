import { combineReducers } from "redux";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import QuanLyNguoiDungReducer from './QuanLyNguoiDungReducer';

//eltr

import Admin_NguoiDungReducer from './Admin_NguoiDungReducer'
import Admin_PhimReducer from './Admin_PhimReducer'

export const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    stateUser: Admin_NguoiDungReducer,
    stateFilm: Admin_PhimReducer,
})