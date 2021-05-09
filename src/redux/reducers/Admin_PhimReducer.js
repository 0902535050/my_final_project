import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"
import swal from 'sweetalert2'

let filmUpdate = {}

let congTac = "dong"


const stateDefault = {
    dsPhim: [],
    chiTietPhim: {},
    thongTinPhongVe: {},
    filmUpdate: filmUpdate,
    congTac: congTac,

}

const Admin_PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM_ACTION: {
            state.dsPhim = action.dsPhim;
            return { ...state }
        }
        case 'LAY_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state }
        }
        case 'THONG_TIN_PHONG_VE': {
            state.thongTinPhongVe = action.thongTinPhongVe
            return { ...state }
        }

        // case DELETE_FILM_SUCCESS: {

        //     swal.fire('Xóa thành công', ``, 'success')
        //     const filterFilms = state.dsPhim.filter(film => film.maPhim !== action.maPhim)
        //     alert('vo reducer')
        //     return { ...state, films: filterFilms }
        // }

        // case DELETE_FILM_ERROR: {
        //     return { ...state, err: action.payload }
        // }


        case 'UpdateFlim': {
            console.log("action.data: ")
            console.log(action.data);

            console.log("state.filmUpdate");
            console.log(state.filmUpdate);
            console.log("action.data");
            console.log(action.data);
            state.congTac = "mo"

            state.filmUpdate = { ...action.data };
            // alert(state.userUpdate);
            // console.log(state.userUpdate);
            return { ...state };
        }

        case 'DONG_MO_FILM': {
            state.congTac = "dong"
            return { ...state }
        }




        default: return { ...state }
    }
}
export default Admin_PhimReducer