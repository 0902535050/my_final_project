import {LAY_DANH_SACH_PHIM_ACTION} from '../const/QuanLyPhimConst';
import {LAY_DANH_SACH_RAP_ACTION} from '../const/QuanLyPhimConst';
import {LAY_LICH_CHIEU_HE_THONG_RAP_ACTION} from '../const/QuanLyPhimConst';


const stateDefault = {
    danhSachPhim: [],
    danhSachRap:[],
    danhSachLichChieuHTR:[],
    chiTietPhim: {},
    thongTinPhongVe: {},
    danhSachGheDangDat:[],
    isLoading: false
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type){
        case LAY_DANH_SACH_PHIM_ACTION:{
            state.danhSachPhim = action.danhSachPhim;
            return {...state};
        }
        case LAY_DANH_SACH_RAP_ACTION:{
            state.danhSachRap = action.danhSachRap;
            return {...state};
        }
        case LAY_LICH_CHIEU_HE_THONG_RAP_ACTION:{
            state.danhSachLichChieuHTR = action.danhSachLichChieuHTR;
            return {...state};
        }
        case "LAY_CHI_TIET_PHIM":{
            state.chiTietPhim = action.chiTietPhim;
            return {...state};
        }
       
        case "LAY_THONG_TIN_PHONG_VE":{
            state.thongTinPhongVe = action.thongTinPhongVe;
            return {...state};
        }
        case "DAT_GHE":{
            let mangGheDangDat = [...state.danhSachGheDangDat];

            let index = mangGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe);

            if(index!==-1){
                mangGheDangDat.splice(index,1);
            }else{
                mangGheDangDat.push(action.gheDangDat)
            }
            return {...state,danhSachGheDangDat:mangGheDangDat}
        }
        case "DAT_VE_THANH_CONG":{
            return {...state, danhSachGheDangDat:[]}
        }
        default: 
            return {...state};
    }
};
