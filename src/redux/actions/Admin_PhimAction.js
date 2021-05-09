import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"
import Axios from 'axios'
import { configure } from "@testing-library/react"
import { DOMAIN, USER_LOGIN, ACCESSTOKEN } from '../../Util/Config'



//------------------action gọi API  (khong dispatch dữ liệu trực tiếp lên reducer)------------------

export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        //action trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        })

        //thành công
        promise.then((res) => {
            dispatch(layDanhSachPhimApi(res.data))
            // setDSPhim(res.data)
        })

        //Thất bại
        promise.catch((error) => {
            console.log(error.response.data)
        })

    }
}

//viết api lấy chi tiết phim về
//async chạy tuần tự, dễ quản lý code cách 2 của các viết promise
export const layChiTietPhimApiAction = async (maPhim) => {

    return async (dispatch) => {

        try {
            //gọi API lấy dữ liệu về
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET',
            })
            console.log(result.data)
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (err) {
            console.log(err)
        }

    }

    //sau khi lấy dữ liệu dispatch lên reducer rồi cập nhật cho chi tiết phim

}


export const layThongTinPhongVeAPIAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            //gọi API lấy dữ liệu về
            const { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
            })

            console.log(data)

            //thành công lấy dữ liệu cập nhật thông tin phòng vé
            if (status === 200) {

                dispatch({
                    type: 'THONG_TIN_PHONG_VE',
                    thongTinPhongVe: data
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}



//------------------action dispatch reducer------------------
export const layDanhSachPhimApi = (dataphim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataphim
    }
}


//DELETE---------------------------------------------------------

// export const deleteFilmSuccess = (maPhim) => {

//     return {
//         type: DELETE_FILM_SUCCESS,
//         data: maPhim,
//         headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
//     }
// }

// export const deleteFilmError = (data) => {
//     return {
//         type: DELETE_FILM_ERROR,
//         payload: data,
//     }
// }



export const deleteFilm = (maPhim, maLoaiNguoiDung) => {



    return async (dispatch) => {
        alert('access nha')
        alert(localStorage.getItem(ACCESSTOKEN));
        if (maLoaiNguoiDung === "QuanTri") {

            // dispatch({
            //     url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            //     method: 'delete',
            //     type: DELETE_FILM_SUCCESS,
            //     data: maPhim,
            //     header: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            // })

            // let { data, status } = await Axios({
            //     url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            //     method: 'DELETE',
            //     data: maPhim,
            //     headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }


            // })
            // console.log(data)

            alert(maPhim)

            return Axios.delete(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                { data: { source: maPhim }, headers: { Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN) } })
                .then(() => {
                    dispatch({
                        data: maPhim,
                        // header: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
                    })
                }).catch((err) => {
                    // const errorPayLoad = {}

                    // errorPayLoad['message'] = err.response.data.message
                    // errorPayLoad['status'] = err.response.status

                    // dispatch(deleteFilmError(errorPayLoad))

                    console.log("Lỗi API (xóa thành công)")
                })



        }
        else {
            alert("CHỈ QUẢN TRỊ MỚI XÓA ĐƯỢC");
        }
    }
}

export const updateFilm = (maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia, maLoaiNguoiDunguser) => {
    return async (dispatch) => {
        if (maLoaiNguoiDunguser === "QuanTri") {
            let filmupdate = { maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia }
            console.log("userupdate:")
            console.log(filmupdate)
            dispatch({
                type: 'UpdateFlim',
                data: filmupdate,
            })
        }
        else {
            alert("CHỈ QUẢN TRỊ MỚI UPDATE ĐƯỢC");
        }


    }
}


