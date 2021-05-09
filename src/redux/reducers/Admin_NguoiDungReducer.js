import React from 'react'

const { USER_LOGIN } = require("../../Util/Config")

let userLogin = {}
let userUpdate = {}
let congTac = "dong"

if (localStorage.getItem(USER_LOGIN)) {
    // lay userLogin trong storage gan cho state


    // khúc này ko hiểu sao phải cmt mới chạy được
    // userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: userLogin,
    userUpdate: userUpdate,
    congTac: congTac,
}

const Admin_NguoiDungReducer = (state = stateDefault, action,) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.userLogin
            return { ...state }
        }

        case 'UpdateUser': {
            console.log("action.data: ")
            console.log(action.data);

            console.log("state.userUpdate");
            console.log(state.userUpdate);
            console.log("action.data");
            console.log(action.data);
            state.congTac = "mo"

            state.userUpdate = { ...action.data };
            // alert(state.userUpdate);
            // console.log(state.userUpdate);
            return { ...state };
        }
        case 'DONG_MO': {
            state.congTac = "dong"
            return { ...state }
        }

        default: return { ...state }
    }
}

export default Admin_NguoiDungReducer;