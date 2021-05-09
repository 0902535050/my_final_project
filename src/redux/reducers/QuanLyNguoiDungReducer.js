import { CAP_NHAT_THONG_TIN_CA_NHAN, DANG_NHAP, LICH_SU_DAT_VE } from "../const/QuanLyPhimConst";

const { USER_LOGIN, ACCOUNTLOGIN } = require("../../Util/Config")

let accountLogin = {}
if (localStorage.getItem(ACCOUNTLOGIN)) {
    accountLogin = JSON.parse(localStorage.getItem(ACCOUNTLOGIN));
}
let userLogin = {}
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
    userLogin: userLogin,
    accountLogin: accountLogin,
    bookingHistory: {},
    stateForm: {
        value: {
            taiKhoan: accountLogin.taiKhoan,
            matKhau: accountLogin.matKhau,
            email: userLogin.email,
            soDT: userLogin.soDT,
            maNhom: userLogin.maNhom,
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
            hoTen: userLogin.hoTen,
        },
    },
}
const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            state.userLogin = action.data
            state.accountLogin = action.account
            return { ...state }
        }
        case LICH_SU_DAT_VE: {
            state.bookingHistory = action.data
            return { ...state }
        }
        case CAP_NHAT_THONG_TIN_CA_NHAN: {
            state.stateForm.value = action.data;
            return { ...state };
        }
        default: return { ...state }
    }
}
export default QuanLyNguoiDungReducer;