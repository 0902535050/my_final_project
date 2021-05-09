import Axios from "axios";
import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst";
import { LAY_DANH_SACH_RAP_ACTION } from "../const/QuanLyPhimConst";
import { LAY_LICH_CHIEU_HE_THONG_RAP_ACTION } from "../const/QuanLyPhimConst";
import { ACCESSTOKEN, DOMAIN } from "../../Util/Config";

export const layDanhSachPhimApiAction = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: DOMAIN + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method: "GET",
            });
            if (status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_PHIM_ACTION,
                    danhSachPhim: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const layDanhSachRapApiAction = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: DOMAIN + "/api/QuanLyRap/LayThongTinHeThongRap",
                method: "GET",
            });
            if (status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_RAP_ACTION,
                    danhSachRap: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const layLichChieuHeThongRapApiAction = async (maHeThongRap) => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: DOMAIN + `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
                method: "GET",
            });
            if (status === 200) {
                dispatch({
                    type: LAY_LICH_CHIEU_HE_THONG_RAP_ACTION,
                    danhSachLichChieuHTR: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

};

export const layChiTietPhimApiAction = async (maPhim) => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: DOMAIN + `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: "GET",
            });
            if (status === 200) {
                dispatch({
                    type: "LAY_CHI_TIET_PHIM",
                    chiTietPhim: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};
export const layThongTinPhongVeApiAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: DOMAIN +`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            if (status === 200) {
                dispatch({
                    type: "LAY_THONG_TIN_PHONG_VE",
                    thongTinPhongVe: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const datGheAction = (ma, stt, gia) => {
    return {
        type: "DAT_GHE",
        gheDangDat: {
            maGhe: ma,
            stt: stt,
            giaVe: gia
        },
    };
};



export const datVeApiAction = async (thongTinVe) => {
    return async (dispatch) => {
        var result = {
            message:"",
            status: "",
            code: 200
        };
        try {
            let { data, status } = await Axios({
                url: DOMAIN + "/api/QuanLyDatVe/DatVe",
                method: "post",
                data: thongTinVe,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });
            dispatch(await layThongTinPhongVeApiAction(thongTinVe.maLichChieu));

            result.message = "Đặt vé thành công !";
            result.status = "success";
            result.code = 200;
         
        } catch (err) {
            result.message = "Đặt vé thất bại";
            result.status = "error";
            result.code = 500;
        }
        return result;
    }
}

