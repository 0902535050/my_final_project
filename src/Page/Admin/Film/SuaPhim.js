import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Axios from 'axios'
import { ACCESSTOKEN } from '../../../Util/Config'

export default function SuaPhim() {

    const [phim, setPhim] = useState({
        hinhAnh: {},
        // ngayKhoiChieu: {},
        maPhim: '',
        danhGia: '',
        biDanh: '',
        tenPhim: '',
        maNhom: 'GP01',
        moTa: '',
        trailer: '',
    })

    let hinhAnh = useSelector(state => state.stateFilm.filmUpdate.hinhAnh)
    let maPhim = useSelector(state => state.stateFilm.filmUpdate.maPhim)
    let danhGia = useSelector(state => state.stateFilm.filmUpdate.danhGia)
    let biDanh = useSelector(state => state.stateFilm.filmUpdate.biDanh)
    let tenPhim = useSelector(state => state.stateFilm.filmUpdate.tenPhim)
    let moTa = useSelector(state => state.stateFilm.filmUpdate.moTa)
    let trailer = useSelector(state => state.stateFilm.filmUpdate.trailer)


    const [hinh, setHinh] = useState({
        profileImg: hinhAnh,
    })

    console.log(maPhim, danhGia, biDanh, tenPhim, moTa, trailer)

    const handleChange = (e) => {
        let { value, name } = e.target;
        e.preventDefault()


        // Thay đổi giá trị thuộc tính đang onChange
        console.log("phim.hinhAnh")
        console.log(phim.hinhAnh)
        if (phim.maPhim == "" && phim.danhGia == "" && phim.biDanh == "" && phim.tenPhim == "" && phim.moTa == "" && phim.trailer == "") {

            setPhim({
                hinhAnh: {},
                // ngayKhoiChieu: {},
                maPhim: maPhim,
                danhGia: danhGia,
                biDanh: biDanh,
                tenPhim: tenPhim,
                maNhom: 'GP01',
                moTa: moTa,
                trailer: trailer,
            })

            console.log("Thong tin phim can sua: ")
            console.log(phim);

        }

        else {

            // if (phim.hinhAnh == null) {
            //     setPhim({
            //         hinhAnh: hinhAnh,
            //         maNhom: 'GP01',
            //     })
            // }
            if (phim.maPhim == "") {
                setPhim({
                    maPhim: maPhim,
                    maNhom: 'GP01',
                })
            }
            if (phim.danhGia == "") {
                setPhim({
                    maNhom: 'GP01',
                    danhGia: danhGia,
                })
            }
            if (phim.biDanh == "") {
                setPhim({
                    biDanh: biDanh,
                    maNhom: 'GP01',
                })
            }
            if (phim.tenPhim == "") {
                setPhim({
                    maNhom: 'GP01',
                    tenPhim: tenPhim,
                })
            }
            if (phim.moTa == "") {
                setPhim({
                    maNhom: 'GP01',
                    moTa: moTa,
                })
            }
            if (phim.trailer == "") {
                setPhim({
                    maNhom: 'GP01',
                    trailer: trailer,
                })
            }
            else {
                if (name === 'hinhAnh') {
                    let newPhim = { ...phim, hinhAnh: e.target.files[0] };
                    setPhim(newPhim)
                    console.log('newPhim trong hinh anh');
                    console.log(newPhim);

                    //chỗ hiện hình ảnh
                    const reader = new FileReader()
                    reader.onload = () => {
                        if (reader.readyState === 2) {
                            setHinh({ profileImg: reader.result })
                        }
                    }
                    reader.readAsDataURL(e.target.files[0])

                }
                else {
                    let newFilm = { ...phim, [name]: value };
                    // Set lại state của userLogin = giá trị mới
                    setPhim(newFilm)
                    console.log("Thong tin phim can sua: ")
                    console.log(newFilm);
                }
            }


        }




    }


    const handleSubmit = (e) => {
        // chặn sự kiện load lại
        e.preventDefault()

        var form_data = new FormData()

        for (var key in phim) {
            console.log(key, phim[key])
            form_data.append(key, phim[key])
        }
        e.preventDefault()

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
            // data: form_data,
            headers: { Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN) },
            method: 'POST',
            data: form_data
        }).then(res => {
            console.log(res)
            alert("Cập nhật phim thành công")

        }).catch(err => {
            console.log(err.response.data)
            // alert(err.response.data)
            alert("Cập phim thất bại")
        })

    }


    const dispatch = useDispatch()

    return (
        <div>



            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i className="fa fa-file-signature mx-2"></i>Thực hiện sửa phim đã chọn!
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleSubmit}>
                                    <div className=" form-group ">
                                        <h6 className="font-weight-light" style={{ padding: 0 }} >Hình ảnh</h6>

                                        <div className="border text-center">
                                            {/* <img src={hinh.profileImg} style={{ height: 240, width: 185 }} /> */}
                                            <img src={hinh.profileImg} style={{ width: '100%' }} />
                                        </div>

                                        <input type="file" name="hinhAnh" onChange={handleChange} />
                                    </div>
                                    <div className="d-flex ">
                                        <div>
                                            <div className=" form-group mr-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Mã phim</h6>
                                                <input placeholder={maPhim} type="text" className="form-control " name="maPhim" onChange={handleChange} disabled />
                                            </div>
                                            <div className=" form-group mr-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Tên phim</h6>
                                                <input placeholder={tenPhim} type="text" className="form-control " name="tenPhim" onChange={handleChange} />
                                            </div>
                                            <div className=" form-group mr-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Bí danh</h6>
                                                <input placeholder={biDanh} type="text" className="form-control " name="biDanh" onChange={handleChange} />
                                            </div>

                                        </div>

                                        <div className="t">

                                            <div className=" form-group ml-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Mã nhóm</h6>
                                                <input type="text" className="form-control " name="maNhom" value="GP01" onChange={handleChange} placeholder="GP01" disabled />
                                            </div>

                                            <div className=" form-group ml-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Đánh giá</h6>
                                                <input placeholder={danhGia} type="text" className="form-control " name="danhGia" onChange={handleChange} />
                                            </div>


                                            <div className=" form-group ml-5">
                                                <h6 className="font-weight-light" style={{ padding: 0 }}>Trailer</h6>
                                                <input placeholder={trailer} type="text" className="form-control " name="trailer" onChange={handleChange} />
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=" font-weight-light" style={{ padding: 0 }}>Mô tả</h6>
                                        <textarea placeholder={moTa} className="form-control  text-overflow " rows="5" cols="20" name="moTa" onChange={handleChange} />
                                    </div>
                                    <button className="btn btn-secondary mt-5" type="reset"><i className="fa fa-sync"></i></button>
                                    <button className="btn btn-danger mt-5 w-100" >Sửa</button>

                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                    let action = {
                                        type: 'DONG_MO_FILM'
                                    }
                                    dispatch(action)
                                }}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}
